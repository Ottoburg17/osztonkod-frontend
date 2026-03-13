import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";


export default function Dashboard() {
  const navigate = useNavigate();
  
  const { 
  user, 
  isAdmin, 
  canPreviewAll, 
  hasStruggleBreaker, 
  subscriptions, 
  purchasedProducts,  
  loading: authLoading,
  refreshAuth
} = useAuth();


useEffect(() => {
  console.log("SUBSCRIPTIONS FROM BACKEND:", subscriptions);
  
  subscriptions.forEach(s =>
    console.log("SLUG:", s.product_slug, "STATUS:", s.status)
  );
}, [subscriptions]);
 
  useEffect(() => {
    if (!authLoading && user) {
      refreshAuth();
    }
  }, [authLoading, user]);

  
  const openStripePortal = async () => {
  try {
    const res = await api.post("/subscriptions/stripe/portal");
    window.location.href = res.data.url;
  } catch (err) {
    console.error(err);
    alert("Nem sikerült megnyitni az előfizetés kezelőt.");
  }
};

  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("orders");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [dopamineSubscription, setDopamineSubscription] = useState(null);


  const [access, setAccess] = useState({
    brainmap: false,
    emotional: false,
    perception: false,
    fullMap: false,
    automaticThinking: false,
    reactionProgram: false,
    dopamineCycle: false,
    emotionalRelease: false,
    struggleBreaker: false,
  });


  useEffect(() => {
  if (!user) return;

  const loadOrders = async () => {
    try {
      const ordersRes = await api.get("/orders/my");
      setOrders(ordersRes.data);
    } catch (err) {
      console.error(err);
      setError("Nem sikerült betölteni a rendeléseket.");
    } finally {
      setLoading(false);
    }
  };

    loadOrders();
  }, [user]); 

   
  useEffect(() => {
  if (!user) return;

  const dopamineSub = subscriptions.find(
    s => s.product_slug === "dopamine-cycle"
  );

  setDopamineSubscription(dopamineSub || null);

  
  const has = (slug) =>
  subscriptions.some(
    s =>
      s.product_slug === slug &&
      ["active", "trialing", "pending"].includes(s.status)
  ) ||
  purchasedProducts.some(
    p => p.product_slug === slug
  );


  setAccess({
    brainmap: has("brainmap") || canPreviewAll,
    emotional: has("emotional-brainmap") || canPreviewAll,
    perception: has("perception") || canPreviewAll,
    automaticThinking: has("automatic-thinking") || canPreviewAll,
    fullMap: has("full-map") || canPreviewAll,
    reactionProgram: has("reaction-program") || canPreviewAll,
    dopamineCycle: has("dopamine-cycle") || canPreviewAll,
    emotionalRelease: has("emotional-release-program") || canPreviewAll,
    struggleBreaker: hasStruggleBreaker || canPreviewAll,
  });

}, [subscriptions, canPreviewAll, hasStruggleBreaker, user, purchasedProducts ]);



  
  if (authLoading || loading) {
    return <div className="pt-32 text-center">Betöltés…</div>;
  }

  if (error) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">

        {isAdmin && (
          <div className="mb-6 flex items-center justify-between text-sm text-green-800 bg-green-100 border border-emerald-300 rounded-xl px-4 py-3">
            <span>
              🛡 Admin mód aktív – minden tartalom elérhető
            </span>

            <button
              onClick={() => navigate("/admin")}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700"
            >
              Admin panel →
            </button>
          </div>
        )}

        <header className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-8">
          Vásárlói fiók
        </h1>
        </header>

        {/* 🧭   🗺 MI EZ PONTOSAN – ELSŐ BELÉPÉSI KERET */}
        {dopamineSubscription && (
          <div className="bg-white border border border-emerald-200 rounded-xl p-4 text-sm text-gray-700 mb-8 max-w-5xl mx-auto">
           
           <p className="font-medium mb-1">
              Az előfizetés nem kötelezettség, és nem is egy kipipálandó feladatlista.
              <br />
              Sokkal inkább egy folyamatos jelenlét:
              <br />
              a rendszer veled marad, és visszatükrözi azt a változást,
              <br />
              ami már elindult benned.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Akkor is működik, ha épp csak jelen vagy.
            </p>

          </div>
        )}

        {/* 💳 DOPAMIN ELŐFIZETÉS STÁTUSZ */}
        {dopamineSubscription && (
          <div className="mb-10 max-w-5xl mx-auto bg-white border border-emerald-200 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-medium mb-1">
              Dopamin-ciklus · havi állapotkövetés
            </p>

            {dopamineSubscription.status === "active" && (
              <>
                <p>
                  Aktív eddig:{" "}
                  <strong>
                    {dopamineSubscription.expires_at
                      ? new Date(dopamineSubscription.expires_at).toLocaleDateString()
                      : "—"}
                  </strong>
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Havonta automatikusan megújul · 2 999 Ft
                </p>
              </>
            )}

            {dopamineSubscription.status === "cancelled" && (
              <>
                <p>
                  Lemondva – hozzáférés eddig él:{" "}
                  <strong>
                    {new Date(dopamineSubscription.expires_at).toLocaleDateString()}
                  </strong>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  További terhelés nem történik.
                </p>
              </>
            )}

             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/invoices"
                className="inline-flex items-center justify-center
                    w-full
                    px-5 py-3
                    rounded-xl
                    bg-emerald-100
                    text-emerald-700
                    font-semibold
                    hover:bg-emerald-200
                    transition"
              >
                Számlák kezelése
              </Link>
          
            {dopamineSubscription.provider === "stripe" && (
               <div className="flex flex-col items-center"> 
                <button
                  onClick={openStripePortal}
                  className="inline-flex items-center justify-center
                     w-full
                     px-5 py-3
                     rounded-xl
                     bg-gray-100
                     text-gray-700
                     font-semibold
                     hover:bg-gray-200
                     transition"
                >
                  Előfizetés kezelése / lemondása (Stripe)
                </button> 
          
              </div>
            )}
        </div>
      </div>
    )}

        {/* 🌀 DOPAMIN-CIKLUS BELÉPÉS */}
          {(
            (dopamineSubscription &&
              ["active", "trialing", "pending"].includes(dopamineSubscription.status))
            || canPreviewAll
          ) && (
          <div className="mb-10 bg-emerald-100 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-emerald-600">
                🌀 Dopamin-ciklus
              </h2>

              <p className="text-sm text-emerald-700 mt-1">
                Napi önreflexiós folyamat
              </p>
            </div>

            <Link
              to="/dashboard/dopamine-cycle"
              className="inline-flex justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700"
            >
              Mai bejelentkezés →
            </Link>
          </div>
        )}

        <PurchasedProducts access={access} />

        <div className="mt-16 text-center opacity-70 mb-4">
        <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          A platform önismereti célú, nem helyettesíti szakemberrel való konzultációt.
        </p>
      </div>

        {/* ---------------- TABS ---------------- */}
        <div className="flex gap-4 mb-10 flex-wrap">

          <Tab
            label="🧠 BrainMap"
            active={activeTab === "brainmap"}
            unlocked={access.brainmap}
            onClick={() =>
              access.brainmap
                ? setActiveTab("brainmap")
                : navigate("/products/brainmap")
            }
          />

          <Tab
            label="🌱 Érzelmi Agytérkép"
            active={activeTab === "emotional"}
            unlocked={access.emotional}
            onClick={() =>
              access.emotional
                ? setActiveTab("emotional")
                : navigate("/products/emotional-brainmap")
            }
          />

          <Tab
            label="👁️ Perception"
            active={activeTab === "perception"}
            unlocked={access.perception}
            onClick={() =>
              access.perception
                ? setActiveTab("perception")
                : navigate("/products/perception")
            }
          />

          <Tab
            label="🧩 Automatikus Gondolatok"
            active={activeTab === "automatic"}
            unlocked={access.automaticThinking}
            onClick={() =>
              access.automaticThinking
                ? setActiveTab("automatic")
                : navigate("/products/automatic-thinking")
            }
          />

          <Tab
            label="⚡ Reakcióprogram(7nap)"
            active={activeTab === "reaction"}
            unlocked={access.reactionProgram}
            onClick={() =>
              access.reactionProgram
                ? navigate("/dashboard/reaction-program")
                : navigate("/products/reaction-program")
            }
          />

          <Tab
            label="🕊️ Érzelmi Elengedési Program"
            active={activeTab === "emotionalRelease"}
            unlocked={access.emotionalRelease}
            onClick={() =>
              access.emotionalRelease
                ? setActiveTab("emotionalRelease")
                : navigate("/products/emotional-release-program")
            }
          />

          <Tab
            label="⚡ StruggleBreaker"
            active={activeTab === "struggleBreaker"}
            unlocked={access.struggleBreaker}
            onClick={() =>
              access.struggleBreaker
                ? navigate("/dashboard/struggle-breaker")
                : navigate("/products/struggle-breaker")
            }
          />


          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-3 rounded-xl font-semibold ${
              activeTab === "orders"
                ? "bg-gray-300"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            📦 Rendelések
          </button>
        </div>

        {/* ---------------- ORDERS ---------------- */}
        {activeTab === "orders" && (
          <>
            {orders.length === 0 ? (
              <div className="bg-emerald-100 p-8 rounded-2xl shadow text-center border border-emerald-200">
                <h2 className="text-2xl font-semibold mb-4 text-emerald-600 ">
                  Itt kezdődik az önismereti utad
                </h2>

                <p className="text-gray-600 mb-6">
                  A BrainMap az alap elemzés, amely feltárja
                  az automatikus döntési és érzelmi mintáidat.
                </p>

                <Link
                  to="/brainmap"
                  className="inline-flex px-7 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700"
                >
                  BrainMap indítása →
                </Link>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow border p-6 mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <h2 className="font-semibold">
                      Rendelés #{order.id}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {new Date(order.created_at).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Összesen: {order.total_price} Ft</span>
                    <span className="text-emerald-600 font-semibold">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </>
        )}

        {/* ---------------- MODULE CONTENT ---------------- */}
        {activeTab === "brainmap" && <Module title="🧠 BrainMap" link="/brainmap" />}
        {activeTab === "emotional" && <Module title="🌱 Érzelmi Agytérkép" link="/emotional-brainmap" />}
        {activeTab === "perception" && <Module title="👁️ Perception" link="/perception" />}
        {activeTab === "automatic" && <Module title="🧩 Automatikus Gondolatok" link="/automatic-thinking" />}
        {activeTab === "emotionalRelease" &&  <Module title="🕊️ Érzelmi Elengedési Program" link="/emotional-release-program" /> }
        {activeTab === "struggleBreaker" &&  <Module title="⚡ StruggleBreaker – Ciklusmegszakító Rendszer" link="/dashboard/struggle-breaker" />}

      </div>
    </div>
  );
}

function Tab({ label, active, unlocked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition
        ${
          unlocked
            ? active
              ? "bg-emerald-700 text-white"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-gray-200 text-gray-400 hover:bg-gray-300"
        }`}
    >
      {label} {!unlocked && "🔒"}
    </button>
  );
}

function Module({ title, link }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow border border-emerald-200">
      <h2 className="text-3xl text-green-600 font-bold mb-6">{title}</h2>
      <Link
        to={link}
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700"
      >
        Megnyitás →
      </Link>
    </div>
  );
}

function PurchasedProducts({ access }) {
   


  return (
    <div className="bg-white rounded-2xl shadow border p-6 mb-10 border border-emerald-200">
      <h2 className="text-xl font-semibold mb-4">
        Megvásárolt termékek
      </h2>

      <ul className="space-y-3">
        <ProductRow
          label="🧠 BrainMap"
          unlocked={access.brainmap}
        />
        <ProductRow
          label="💚 Érzelmi Agytérkép"
          unlocked={access.emotional}
        />
        <ProductRow
          label="👁️ Perception"
          unlocked={access.perception}
        />
        <ProductRow
          label="🧩 Automatikus Gondolatok"
          unlocked={access.automaticThinking}
        />
        <ProductRow 
          label="🧭  Teljes Térkép (csomag)" 
          unlocked={access.fullMap} 
        />
         <ProductRow
          label="🔥 Automatikus reakciók megszakítása – 7 napos program"
          unlocked={access.reactionProgram}
        />
        <ProductRow
          label="🕊️ Érzelmi Elengedési Program"
          unlocked={access.emotionalRelease}
        />
        <ProductRow
          label="⚡ StruggleBreaker – Ciklusmegszakító Rendszer"
          unlocked={access.struggleBreaker}
        />

      </ul>
    </div>
  );
}

function ProductRow({ label, unlocked }) {
  return (
    <li className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      {unlocked ? (
        <span className="text-green-600 font-semibold">
          ✔ kifizetve
        </span>
      ) : (
        <span className="text-gray-400">
          🔒 nincs hozzáférés
        </span>
      )}
    </li>
  );
}

