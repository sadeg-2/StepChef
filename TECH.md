# StepChef — Technical Requirements & Architecture

## 1. Overview

StepChef is a web app that helps users:
- Discover recipes.
- View clear recipe details (ingredients, instructions, video).
- Learn cooking through **step-by-step guided mode**.
- Track progress inside a recipe (start, next step, pause, resume, return later).

Data source: **TheMealDB** (no auth, read-only).
Initial version: **Frontend-only** (React), using browser storage for tracking.

---

## 2. High-Level Features

1. **Landing / Home**
2. **Recipe Search & Browse**
3. **Recipe Details View**
4. **Step-by-Step Cooking Mode**
5. **Explore (by category/area/ingredient)**
6. **Lightweight Progress Tracking** (local)
7. **Motivational / Helper Messages** (non-blocking UX detail)
8. **Basic Layout & Navigation**

No login required in v1.

---

## 3. Pages & Routes

### 3.1. `/` — Home / Landing Page

**Purpose**
- Introduce StepChef.
- Let user quickly start searching or get a random recipe.

**Sections**
- Hero section:
  - App name + tagline.
  - Primary action: **"Find a Recipe"**.
  - Secondary action: **"Surprise Me"** (random recipe).
- Quick search bar (by name or ingredient).
- A small "How it works" strip (3 steps).

**Key Components**
- `<MainLayout>`
- `<HeroSection>`
- `<SearchBar>`
- `<QuickActions>` (buttons: Search, Random)
- `<FeaturedRecipes>` (optional; can be static or random)

---

### 3.2. `/search` — Search Results

**Purpose**
- Show recipes based on user query (by name or ingredient).

**Inputs**
- Query params:
  - `q` → search term (name)
  - `i` → ingredient (optional future)
- Uses:
  - `search.php?s=` (by name)
  - `filter.php?i=` (by ingredient)

**Display**
- Grid of recipe cards.
- Each card:
  - Image
  - Name
  - Category / Area
  - "View Recipe" button → `/recipe/:id`

**Key Components**
- `<SearchBar>` (shared)
- `<RecipeGrid>`
- `<RecipeCard>`
- `<EmptyState>` (if no results)
- `<LoadingState>`

---

### 3.3. `/recipe/:id` — Recipe Details

**Purpose**
- Show all info needed to understand a dish.
- Entry point to **Step-by-Step Mode**.

**Data**
- Endpoint: `lookup.php?i=<idMeal>`

**Content**
- Recipe image
- Name
- Category / Area
- Ingredients list (parsed from `strIngredientX` + `strMeasureX`)
- Full instructions (text)
- YouTube video (if `strYoutube` exists)
- Button:
  - **"Start Guided Cooking"** → `/cook/:id`

**Key Components**
- `<RecipeHeader>`
- `<RecipeMeta>` (category, area)
- `<IngredientList>`
- `<InstructionPreview>` (full text or collapsed with “View all”)
- `<YoutubeEmbed>` (if available)
- `<StartCookingButton>`
- `<BackLink>`

---

### 3.4. `/cook/:id` — Step-by-Step Cooking Mode

**Purpose**
- Core feature: guided, step-by-step experience.
- Track current step, allow resume.

**Data**
- Same as recipe details: `lookup.php?i=<idMeal>`
- Instructions split into steps (by line break / sentence).

**Features**
- Show **one step at a time**.
- Controls:
  - Next Step
  - Previous Step
  - Restart
  - “I’ll finish later” → save progress.
- Optional:
  - Simple timer per step (manual or fixed).
- Progress bar:
  - e.g. `currentStep / totalSteps`.

**State & Storage**
- Local component state for current step.
- Persist to `localStorage`:
  - key: `stepchef_progress_<mealId>`
  - value: `{ currentStep, totalSteps, updatedAt }`
- On load:
  - If progress exists → ask: “Continue from step X or restart?”

**Key Components**
- `<CookingLayout>` (focused UI, fewer distractions)
- `<StepProgressBar>`
- `<CurrentStepCard>`
- `<StepControls>` (Next, Back, Restart)
- `<ResumePrompt>` (if saved progress)
- `<HelperTips>` (short hints / motivational quotes)
- `<YoutubeMini>` (optional: small video on top or side)

---

### 3.5. `/explore` — Explore by Category / Area

**Purpose**
- Let users browse recipes by:
  - Category (`/list.php?c=list` or `categories.php`)
  - Area (`/list.php?a=list`)

**Sections**
- Categories grid
- Areas list
- On click:
  - Fetch:
    - `filter.php?c=<category>` or
    - `filter.php?a=<area>`
  - Render recipes as cards.

**Key Components**
- `<ExploreFilters>`
- `<CategoryGrid>`
- `<AreaList>`
- `<RecipeGrid>`

---

### 3.6. `/about` (Optional v1.5)

**Purpose**
- Explain StepChef concept.
- Not critical for core functionality.

**Components**
- `<StaticPageLayout>`
- Text sections (Mission, How it Works)

---

## 4. Shared Layout & UI Components

### 4.1. Layout

- `<App>`: routing + global providers.
- `<MainLayout>`:
  - `<HeaderNav>`
  - `<PageContainer>`
  - `<Footer>`

### 4.2. Navigation

- `<HeaderNav>`:
  - Logo (StepChef)
  - Links: Home, Explore, (optional) About
  - (optional) “Start Cooking” if last viewed recipe.

### 4.3. Reusable Components

- `<SearchBar>`
- `<RecipeCard>`
- `<RecipeGrid>`
- `<Button>`
- `<Tag>` (for Category, Area labels)
- `<SkeletonLoader>` (loading state)
- `<EmptyState>`
- `<Modal>` (for resume / confirm dialogs)
- `<Toast>` or inline alerts for micro-feedback

---

## 5. Data & API Integration

### 5.1. API Base

- Base URL: `https://www.themealdb.com/api/json/v1/1/`

### 5.2. Used Endpoints

- Search by name: `search.php?s=`
- Lookup full meal: `lookup.php?i=`
- Random meal: `random.php`
- Filter by ingredient: `filter.php?i=`
- Filter by category: `filter.php?c=`
- Filter by area: `filter.php?a=`
- List categories: `categories.php`
- List areas: `list.php?a=list`
- List ingredients (future): `list.php?i=list`

### 5.3. Client Logic

- Simple fetch wrappers:
  - `getMealById(id)`
  - `searchMealsByName(q)`
  - `filterMealsByIngredient(i)`
  - `filterMealsByCategory(c)`
  - `filterMealsByArea(a)`
  - `getRandomMeal()`
  - `getCategories()`
  - `getAreas()`

- Error handling:
  - If `meals` is `null` → show `<EmptyState>`.

---

## 6. Step-by-Step Cooking Logic (Core Logic Spec)

1. Fetch recipe details by `id`.
2. Split `strInstructions` into steps.
   - Clean:
     - Remove empty lines.
     - Trim spaces.
3. Initialize:
   - `currentStep = 0`
   - `totalSteps = steps.length`
4. UI:
   - Show current step text.
   - Progress bar: `(currentStep + 1) / totalSteps`.
5. Controls:
   - **Next**:
     - `if currentStep < totalSteps - 1` → `currentStep++`
   - **Back**:
     - `if currentStep > 0` → `currentStep--`
   - **Restart**:
     - `currentStep = 0`
6. Save:
   - On step change:
     - Write to `localStorage`.
7. On mount:
   - Check `localStorage` for this meal.
   - If found:
     - Show prompt:
       - “Continue from step X” → load saved.
       - “Start over” → clear and reset.

---

## 7. Non-Functional Requirements

- **Responsive design**: mobile-first (users cooking on phones).
- **Fast load**: cache basic API responses in memory.
- **Clarity**: large readable fonts in cooking mode.
- **No account required** for v1.
- **Accessible colors & controls**.

---

## 8. Build Roadmap (Step-by-Step)

1. **Scaffold app**
   - Setup routing, layout, header, footer.

2. **Home page**
   - Hero + basic search + random recipe button.

3. **Search results page**
   - Implement `/search` using `search.php?s=`.

4. **Recipe details page**
   - Fetch by `id`.
   - Show ingredients, instructions, video.

5. **Cooking mode page**
   - Implement `/cook/:id`.
   - Step splitting, navigation, progress.

6. **Explore page**
   - Categories + areas + filters.

7. **Local progress tracking**
   - Implement save/resume behavior.

8. **Polish UI**
   - Add toasts/messages, empty states, loading skeletons.

9. **Content tuning**
   - Add friendly helper texts & microcopy.

---

## 9. Future Enhancements (Out of Scope v1, but Planned)

- User accounts & cloud sync.
- Favorites & history.
- Difficulty levels & time estimation.
- Challenges / learning paths.
- Multi-language support.
- Voice control (“Next step”, “Repeat step”).

---
