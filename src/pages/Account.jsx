import { Link } from "react-router-dom";
import { useState,  } from "react";

import { useAuth } from "../context/useAuth";
import UserAvatar from "../components/UserAvatar";
import { Save, Lock, Trash2, Eye, EyeOff } from "lucide-react";
import api from "../api/axios";
import { useEffect } from "react";
import SubscriptionSettings from "../components/SubscriptionSettings";
import { useSearchParams } from "react-router-dom";


  
export default function Account() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [saving, setSaving] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteSaving, setDeleteSaving] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success"); // success | error
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [passwordMessageType, setPasswordMessageType] = useState("success");
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deleteMessageType, setDeleteMessageType] = useState("success");
  const [subscriptions, setSubscriptions] = useState([]);
  const [subsLoading, setSubsLoading] = useState(true);
  const [showSubscriptionSettings, setShowSubscriptionSettings] = useState(false);
  const [searchParams] = useSearchParams();


  useEffect(() => {
  const subStatus = searchParams.get("sub");

  if (subStatus === "success") {
    setMessageType("success");
    setMessage("Előfizetés sikeresen aktiválva 🎉");


    

    // újratöltjük az előfizetéseket
    api.get("/subscriptions/my")
      .then(res => setSubscriptions(res.data.subscriptions || []));
  }

  if (subStatus === "cancel") {
    setMessageType("error");
    setMessage("Előfizetés megszakítva");
  }
}, []);


  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const res = await api.get("/subscriptions/my");
        setSubscriptions(res.data.subscriptions || []);
      } catch (err) {
        console.error("Subscription load error:", err);
      } finally {
        setSubsLoading(false);
      }
    };

    loadSubscriptions();
  }, []);



const handleSaveProfile = async () => {
  setSaving(true);
  setMessage(null);

  try {
    await api.put("/auth/profile", { name });

    setMessageType("success");
    setMessage("Profil sikeresen frissítve");
  } catch (err) {
    setMessageType("error");
    setMessage(err.response?.data?.error || "Hiba történt");
  } finally {
    setSaving(false);
  }
};

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-40 sm:pt-24 pb-10 space-y-8 sm:space-y-12">

      {/* ===== PAGE TITLE ===== */}
      <header className="text-center">
        <h1 className="text-2xl font-bold text-green-600">Beállítások</h1>
        <p className="text-gray-500 mt-1">
          Kezeld a fiókodat, biztonságot és megjelenést
        </p>
      </header>

      {/* ================= PROFIL ================= */}
      <Section 
        title="Profil"
        description="Személyes adataid kezelése"
      >

       {message && (
          <div
            className={`rounded-lg px-4 py-2 text-sm ${
              messageType === "success"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}  

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">

      {/* AVATAR – mobilon középen, desktopon bal oldalt */}
      <div className="flex justify-end sm:justify-start mb-4 sm:mb-0 -mt-16 sm:mt-0">
        <UserAvatar user={user} size={48} />
      </div>

      {/* INPUT MEZŐK */}
      <div className="flex-1 space-y-3">
        <Input
          label="Név"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          value={user?.email || ""}
          disabled
        />
      </div>

    </div>



        <ActionRow>
          <PrimaryButton onClick={handleSaveProfile} loading={saving}>
            <Save size={16} />
            Mentés
          </PrimaryButton>
        </ActionRow>
      </Section>




      {/* ================= BIZTONSÁG ================= */}
      <div className="flex justify-center relative z-10">
       <ActionButton onClick={() => 
        setShowPasswordModal(true)}>
        <Lock size={18} />
        Jelszó módosítása
      </ActionButton>

      </div>

      {/* ================= ELŐFIZETÉS ================= */}
      <Section
        title="Előfizetés"
        description="Aktív előfizetéseid állapota"
      >
        {subsLoading && (
          <p className="text-sm text-gray-500">
            Előfizetés betöltése…
          </p>
        )}

        {!subsLoading && subscriptions.length === 0 && (
          <p className="text-sm text-gray-500">
            Nincs aktív előfizetésed.
          </p>
        )}

        <div className="space-y-4">
          {subscriptions.map((sub, i) => (
            <div
              key={i}
              className="flex items-center justify-between
                        border rounded-lg p-4"
            >
              <div>
                <p className="font-semibold">
                  {sub.product_slug === "dopamine-cycle"
                    ? "Dopamin-ciklus"
                    : sub.product_slug}
                </p>

                <p className="text-xs text-gray-500">
                  Szolgáltató: {sub.provider}
                </p>
              </div>

              <SubscriptionStatusBadge status={sub.status} />
            </div>
          ))}
        </div>

        {/* 👇 EZ AZ ÚJ RÉSZ */}
       <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowSubscriptionSettings(true)}
          className="
            inline-flex items-center gap-2
            border border-emerald-500
            text-emerald-700
            px-4 py-2 rounded-lg
            text-sm font-medium
            hover:bg-emerald-100
            transition
          "
        >
          Előfizetés kezelése
        </button>
      </div>

        
        <div className="mt-6 flex justify-center">
          <Link
            to="/invoices"
            className="
              inline-flex items-center gap-2
              text-emerald-600 font-semibold
              hover:underline
            "
          >
            🧾 Számláim megtekintése
          </Link>
        </div>

      </Section>


    
     {/* ================= DANGER ZONE ================= */}
      <Section
        title="Fiók"
        description="Visszavonhatatlan műveletek"
        danger
      >

        <p className="text-sm text-red-600">
          A fiók törlése végleges, és nem visszaállítható.
        </p>

        <div className="flex justify-center">
          <DangerButton onClick={() => setShowDeleteModal(true)}>
            <Trash2 size={18} />
            Fiók törlése
          </DangerButton>
        </div>
      </Section>


       {showSubscriptionSettings && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 relative">

            {/* ❌ BEZÁRÁS GOMB */}
            <button
              onClick={() => setShowSubscriptionSettings(false)}
              className="
                absolute top-4 right-4
                rounded-full p-2
                text-gray-400
                hover:text-gray-700
                hover:bg-gray-100
                transition
              "
              aria-label="Bezárás"
            >
              ✕
            </button>

            <SubscriptionSettings
              onClose={() => setShowSubscriptionSettings(false)}
            />
          </div>
        </div>
      )}




       {showPasswordModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-sm mx-4 space-y-4">
            <h3 className="text-lg font-semibold text-center">
              Jelszó módosítása
            </h3>
             
          {passwordMessage && (
            <div
              className={`rounded-lg px-4 py-2 text-sm ${
                passwordMessageType === "success"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {passwordMessage}
            </div>
          )}



            {/* ===== JELENLEGI JELSZÓ ===== */}
          <div className="relative">
            <Input
              label="Jelenlegi jelszó"
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
            >
              {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* ===== ÚJ JELSZÓ ===== */}
          <div className="relative">
            <Input
              label="Új jelszó"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* ===== GOMBOK ===== */}
          <div className="flex justify-between pt-4">
            <button
              onClick={() => {
                setShowPasswordModal(false);
                setCurrentPassword("");
                setNewPassword("");
                setShowCurrentPassword(false);
                setShowNewPassword(false);
              }}
              className="text-gray-500 hover:text-red-500 "
            >
              Mégse
            </button>



              <PrimaryButton
                loading={passwordSaving}
                onClick={async () => {

                    if (!currentPassword || !newPassword) {
                    setPasswordMessageType("error");
                    setPasswordMessage("Minden mezőt ki kell tölteni");
                    return;
                  }

                  if (newPassword.length < 6) {
                   setPasswordMessageType("error");
                   setPasswordMessage("Az új jelszó legalább 6 karakter hosszú kell legyen");
                   return;
                  }

                  setPasswordSaving(true);


                  try {
                      
                    await api.put("/auth/change-password", {
                      currentPassword,
                        newPassword,
                    });

                  
                    setPasswordMessageType("success");
                    setPasswordMessage("Jelszó sikeresen módosítva");

                  
                    setCurrentPassword("");
                    setNewPassword("");
                    setShowCurrentPassword(false);
                    setShowNewPassword(false);
                    
                    setTimeout(() => {
                      setShowPasswordModal(false);
                      setPasswordMessage(null);
                    }, 2000);


                   
                  } catch (err) {
                    setPasswordMessageType("error");
                    setPasswordMessage(err.message || "Hiba történt a jelszó módosításakor");
                  } finally {
                    setPasswordSaving(false);
                  }
                }}
              >
                Mentés
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-sm space-y-6 relative">
      <h3 className="text-lg font-semibold text-center text-red-600">
        Fiók törlése
      </h3>
       
       {deleteMessage && (
        <div
          className={`rounded-lg px-4 py-2 text-sm ${
            deleteMessageType === "success"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {deleteMessage}
        </div>
      )}



      <p className="text-sm text-gray-600 text-center">
        Ez a művelet végleges.  
        A fiókod és minden adatod törlésre kerül.
      </p>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="text-gray-500"
        >
          Mégse
        </button>

        <button
          disabled={deleteSaving}


          onClick={async () => {
            setDeleteSaving(true);
            setDeleteMessage(null);


            try {
              await api.delete("/auth/delete-account");
              

              setDeleteMessageType("success");
              setDeleteMessage("Fiók sikeresen törölve. Átírányítás..");
             
            setTimeout(() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }, 1500);

            } catch (err) {
             setDeleteMessageType("error");
             setDeleteMessage(err.response?.data?.error || "Hiba történt a fiók törlésekor");
            } finally {
              setDeleteSaving(false);
            }
          }}
          className="
            bg-red-600 text-white px-4 py-2 rounded-lg
            hover:bg-red-700 transition
            disabled:opacity-50
          "
        >
          Igen, törlöm
        </button>

         </div>
           </div>
         </div>
        )}

    </div>
  );
}






/* =========================================================
   ACCOUNT-SPECIFIC UI HELPERS
========================================================= */
function Section({ title, description, headerRight, children, danger = false }) {
  return (
    <section
      className={`
        rounded-xl border p-4 sm:p-6 space-y-4 sm:space-y-6
        ${danger
          ? "border-red-200 bg-red-50"
          : "border-emerald-200 bg-white"}
      `}
    >
      {/* FEJLÉC */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-green-600">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {headerRight && (
          <div className="shrink-0">
            {headerRight}
          </div>
        )}
      </div>

      {children}
    </section>
  );
}




function Input({ label, ...props }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      <input
        {...props}
        className="
          w-full rounded-lg border border-gray-300
          px-3 py-2
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          disabled:bg-gray-100 disabled:text-gray-500
        "
      />
    </label>
  );
}

function ActionRow({ children }) {
  return (
    <div className="flex justify-center pt-4">
      {children}
    </div>
  );
}

function PrimaryButton({ children, loading, ...props }) {
  return (
    <button
      {...props}
      disabled={loading}
      className="
    
        inline-flex items-center justify-center gap-2
        bg-emerald-600 text-white
        px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg
        hover:bg-emerald-700
        disabled:opacity-50
        transition
      "
    >
      {children}
    </button>
  );
}

function ActionButton({ children, ...props}) {
  return (
    <button 
     {...props}
     className="
     flex items-center gap-3
     px-4 py-3 rounded-lg
     border border-emerald-300
     text-emerald-700
     hover:bg-emerald-100
     hover:border-emerald-400
     transition
     "
    >
      {children}
    </button>
  );
}


function DangerButton({ children }) {
  return (
    <button
      className="
        flex items-center gap-3
        px-4 py-3 rounded-lg
        bg-red-600 text-white
        hover:bg-red-700
        transition
      "
    >
      {children}
    </button>
  );
}

function SubscriptionStatusBadge({ status }) {
  const styles = {
    active: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    suspended: "bg-orange-100 text-orange-700",
    expired: "bg-gray-200 text-gray-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}


