import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useCategories, useAreaList, useIngredientList } from '../hooks/useMeals';
import { useNavigate } from 'react-router-dom';

const AREA_FLAGS: Record<string, string> = {
  American: 'us',
  Argentinian: 'ar',
  Australian: 'au',
  British: 'gb',
  Canadian: 'ca',
  Chinese: 'cn',
  Croatian: 'hr',
  Dutch: 'nl',
  Egyptian: 'eg',
  Filipino: 'ph',
  French: 'fr',
  Greek: 'gr',
  Indian: 'in',
  Irish: 'ie',
  Italian: 'it',
  Jamaican: 'jm',
  Japanese: 'jp',
  Kenyan: 'ke',
  Malaysian: 'my',
  Mexican: 'mx',
  Moroccan: 'ma',
  Norwegian: 'no',
  Polish: 'pl',
  Portuguese: 'pt',
  Russian: 'ru',
  'Saudi Arabian': 'sa',
  Slovakian: 'sk',
  Spanish: 'es',
  Syrian: 'sy',
  Thai: 'th',
  Tunisian: 'tn',
  Turkish: 'tr',
  Ukrainian: 'ua',
  Uruguayan: 'uy',
  Vietnamese: 'vn',
};

export default function ExplorePage() {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  const { data: catData, isLoading: loadingCats } = useCategories();
  const { data: areaData, isLoading: loadingAreas } = useAreaList();
  const { data: ingredientsData, isLoading: loadingIngs } = useIngredientList();

  // -----------------------------------
  // SEARCH
  // -----------------------------------
  const [search, setSearch] = useState('');
  const searchLower = search.toLowerCase();

  // Categories
  const filteredCategories = useMemo(() => {
    return (
      catData?.categories?.filter((c) => c.strCategory.toLowerCase().includes(searchLower)) ?? []
    );
  }, [catData, searchLower]);

  // Areas
  const filteredAreas = useMemo(() => {
    return areaData?.meals?.filter((a) => a.strArea.toLowerCase().includes(searchLower)) ?? [];
  }, [areaData, searchLower]);

  // Ingredients
  const filteredIngredients = useMemo(() => {
    return (
      ingredientsData?.meals?.filter((ing) =>
        ing.strIngredient.toLowerCase().includes(searchLower)
      ) ?? []
    );
  }, [ingredientsData, searchLower]);

  // -----------------------------------
  // INGREDIENT PAGINATION
  // -----------------------------------
  const INGREDIENTS_PER_PAGE = 15;
  const [ingredientPage, setIngredientPage] = useState(1);

  const totalIngredientPages = Math.ceil(filteredIngredients.length / INGREDIENTS_PER_PAGE);

  const paginatedIngredients = filteredIngredients.slice(
    (ingredientPage - 1) * INGREDIENTS_PER_PAGE,
    ingredientPage * INGREDIENTS_PER_PAGE
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      {/* =======================================================
          HERO + SEARCH
      ======================================================= */}
      <header className="py-16 text-center">
        <h1
          className={`text-4xl font-extrabold mb-4 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Explore Recipes
        </h1>

        <p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            theme === 'ai' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Discover meals by category, region, or ingredients.
        </p>

        {/* SEARCH BAR */}
        <div className="max-w-md mx-auto px-6">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIngredientPage(1); // reset to page 1 after search
            }}
            placeholder="Search categories, areas, ingredients..."
            className={`w-full p-3 rounded-xl border outline-none transition-all ${
              theme === 'ai'
                ? 'bg-white/10 border-white/20 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
            }`}
          />
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* =======================================================
            CATEGORIES
        ======================================================= */}
        <h2
          className={`text-3xl font-bold mb-6 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Categories
        </h2>

        {loadingCats ? (
          <p>Loading categories...</p>
        ) : filteredCategories.length === 0 ? (
          <p>No categories found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={cat.idCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => navigate(`/category/${cat.strCategory}`)}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img src={cat.strCategoryThumb} className="w-full h-40 object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'ai'
                      ? 'from-slate-950/90 via-slate-900/40 to-transparent'
                      : 'from-black/80 via-black/30 to-transparent'
                  }`}
                />
                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg drop-shadow-xl">
                  {cat.strCategory}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* =======================================================
            AREAS
        ======================================================= */}
        <h2
          className={`text-3xl font-bold mb-6 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Explore By Area
        </h2>

        {loadingAreas ? (
          <p>Loading areas...</p>
        ) : filteredAreas.length === 0 ? (
          <p>No areas found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {filteredAreas.map((a, i) => {
              const code = AREA_FLAGS[a.strArea];
              const flag = code ? `https://flagcdn.com/w40/${code}.png` : null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => navigate(`/area/${a.strArea}`)}
                  className={`p-4 rounded-xl text-center font-semibold cursor-pointer shadow-md border flex flex-col items-center gap-3
                  ${
                    theme === 'ai'
                      ? 'bg-white/5 border-white/10 backdrop-blur-xl'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {flag && <img src={flag} className="w-8 h-6 rounded shadow" alt={a.strArea} />}
                  <span>{a.strArea}</span>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* =======================================================
            INGREDIENTS WITH PAGINATION
        ======================================================= */}
        <h2
          className={`text-3xl font-bold mb-6 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Ingredients
        </h2>

        {loadingIngs ? (
          <p>Loading ingredients...</p>
        ) : filteredIngredients.length === 0 ? (
          <p>No ingredients found.</p>
        ) : (
          <>
            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {paginatedIngredients.map((ing, i) => {
                const img = `https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`;

                return (
                  <motion.div
                    key={ing.idIngredient}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => navigate(`/ingredient/${ing.strIngredient}`)}
                    className={`p-4 rounded-xl shadow-lg border cursor-pointer flex flex-col items-center gap-3
                    ${
                      theme === 'ai'
                        ? 'bg-white/5 border-white/10 backdrop-blur-xl'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <img src={img} className="w-14 h-14 object-contain drop-shadow-lg" />
                    <p className="font-semibold text-center">{ing.strIngredient}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setIngredientPage((p) => Math.max(p - 1, 1))}
                disabled={ingredientPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  ingredientPage === 1
                    ? 'opacity-30 cursor-not-allowed'
                    : theme === 'ai'
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-orange-500 text-white'
                }`}
              >
                Previous
              </button>

              <span className="font-bold">
                {ingredientPage} / {totalIngredientPages}
              </span>

              <button
                onClick={() => setIngredientPage((p) => Math.min(p + 1, totalIngredientPages))}
                disabled={ingredientPage === totalIngredientPages}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  ingredientPage === totalIngredientPages
                    ? 'opacity-30 cursor-not-allowed'
                    : theme === 'ai'
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-orange-500 text-white'
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
