import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    necessary: true, // Always true
  });

  useEffect(() => {
    // Check local storage for consent decision
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveToExcel = async (data) => {
    try {
      // Menggunakan Web3Forms untuk produksi di Vercel
      // Dapatkan Access Key gratis dari https://web3forms.com/
      const payload = {
        access_key: "EN4DWtmj1gGrmUii6LYMgrw3H9K9XJZGo6du64L8H2Mb", 
        subject: "Persetujuan Cookie Baru (Siap Export CSV)",
        from_name: "Sistem Cookie Portofolio",
        ...data
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Gagal menyimpan persetujuan:", error);
    }
  };

  const handleAcceptAll = () => {
    const data = { action: "accept_all", preferences: { analytics: true, marketing: true, necessary: true }, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie_consent", JSON.stringify(data));
    saveToExcel(data);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const data = { action: "reject_all", preferences: { analytics: false, marketing: false, necessary: true }, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie_consent", JSON.stringify(data));
    saveToExcel(data);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const data = { action: "custom", preferences, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie_consent", JSON.stringify(data));
    saveToExcel(data);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white shadow-2xl dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto">
          {!showAdvanced ? (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Keamanan & Kebijakan Cookie</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Kami menggunakan cookie untuk memastikan keamanan situs ini dan menyajikan konten yang disesuaikan. 
                  Data persetujuan cookie Anda akan dicatat dan disimpan dengan aman ke dalam sistem (Excel/Sistem Kami) untuk kepatuhan perlindungan privasi Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-max">
                <button
                  onClick={() => setShowAdvanced(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Pengaturan Lanjutan
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
                >
                  Tolak Semua
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all font-bold"
                >
                  Terima Semua
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pengaturan Lanjutan Cookie</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sesuaikan preferensi cookie Anda di bawah ini:</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Keamanan & Cookie Esensial (Wajib)</span>
                    <p className="text-xs text-gray-500">Diperlukan agar fitur keamanan situs web dan pencegahan serangan (seperti CSRF, Punycode) dapat berfungsi.</p>
                  </div>
                  <input type="checkbox" checked={true} disabled className="w-5 h-5 accent-blue-600 opacity-50 cursor-not-allowed" />
                </div>
                
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Cookie Analitik</span>
                    <p className="text-xs text-gray-500">Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs web secara anonim.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    className="w-5 h-5 accent-blue-600 cursor-pointer" 
                  />
                </div>
                
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Cookie Pemasaran</span>
                    <p className="text-xs text-gray-500">Digunakan untuk melacak pengunjung di seluruh situs web untuk menampilkan konten yang relevan.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    className="w-5 h-5 accent-blue-600 cursor-pointer" 
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowAdvanced(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Batal
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-lg"
                >
                  Simpan Preferensi
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
