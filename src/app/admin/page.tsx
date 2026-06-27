"use client";

import { useState, useEffect } from "react";
import { getSettings, saveSettings, SiteSettings } from "@/lib/settings";
import Link from "next/link";

const ADMIN_USER = "Disk2020";
const ADMIN_PASS = "Disk2010";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [settings, setSettings] = useState<SiteSettings>({
    discountPercent: 25,
    timerEndDate: "2026-11-19T00:00:00",
    preorderEnabled: true,
  });
  const [saved, setSaved] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = sessionStorage.getItem("admin_authed");
      if (s === "1") {
        setAuthed(true);
        setSettings(getSettings());
      }
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem("admin_authed", "1");
      setAuthed(true);
      setSettings(getSettings());
      setLoginError("");
    } else {
      setLoginError("Неверный логин или пароль");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_authed");
    setAuthed(false);
    setUsername("");
    setPassword("");
  }

  function handleSave() {
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  // ─── Login Screen ───────────────────────────────────────────────
  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: "#050510" }}
      >
        {/* BG grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(153,69,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(153,69,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #9945FF, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #14F195, transparent)" }}
        />

        <div
          className="relative z-10 w-full max-w-md mx-4 rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(153,69,255,0.3)",
            boxShadow: "0 0 60px rgba(153,69,255,0.2)",
          }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-black font-black font-orbitron text-2xl mb-4"
              style={{ background: "linear-gradient(135deg, #9945FF, #14F195)" }}
            >
              VI
            </div>
            <h1 className="font-orbitron font-black text-2xl text-white">
              Панель управления
            </h1>
            <p className="text-gray-500 text-sm mt-1">GTA VI × Solana — Admin</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#9945FF] font-semibold mb-2">
                Логин
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Введите логин"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all focus:border-[#9945FF]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(153,69,255,0.25)",
                }}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#9945FF] font-semibold mb-2">
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Введите пароль"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all focus:border-[#9945FF] pr-12"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(153,69,255,0.25)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPass ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="px-4 py-3 rounded-xl text-sm text-red-400 border border-red-500/30 bg-red-500/10">
                ❌ {loginError}
              </div>
            )}

            <button
              type="submit"
              className="btn-sol py-4 rounded-xl text-base w-full mt-2"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-gray-600 hover:text-[#9945FF] transition-colors">
              ← Вернуться на сайт
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard ──────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "#050510" }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(5,5,16,0.9)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(153,69,255,0.2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-black font-black font-orbitron text-sm"
              style={{ background: "linear-gradient(135deg, #9945FF, #14F195)" }}
            >
              VI
            </div>
            <div>
              <p className="font-orbitron font-bold text-white text-sm">Admin Panel</p>
              <p className="text-xs text-gray-500">GTA VI × Solana</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-white transition-colors hidden sm:inline"
            >
              Просмотр сайта →
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-red-500/10 text-red-400 border border-red-500/30"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-3xl text-white mb-1">
            Панель управления
          </h1>
          <p className="text-gray-500">Управляй скидкой и таймером предзаказа</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Текущая скидка",       value: `${settings.discountPercent}%`, color: "#14F195" },
            { label: "Предзаказы активны",    value: settings.preorderEnabled ? "ДА" : "НЕТ", color: settings.preorderEnabled ? "#14F195" : "#FF2D78" },
            { label: "Дата окончания",        value: new Date(settings.timerEndDate).toLocaleDateString("ru-RU"), color: "#9945FF" },
            { label: "Выход GTA VI",          value: "19.11.2026", color: "#FFD700" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${s.color}22`,
              }}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{s.label}</p>
              <p className="font-orbitron font-bold text-2xl" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Discount settings */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(153,69,255,0.06)",
              border: "1px solid rgba(153,69,255,0.2)",
            }}
          >
            <h2 className="font-orbitron font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "rgba(153,69,255,0.2)" }}>💰</span>
              Скидка Solana
            </h2>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">Размер скидки</label>
                <span
                  className="font-orbitron font-black text-2xl"
                  style={{ color: "#14F195", textShadow: "0 0 15px #14F19588" }}
                >
                  {settings.discountPercent}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={5}
                value={settings.discountPercent}
                onChange={(e) =>
                  setSettings({ ...settings, discountPercent: Number(e.target.value) })
                }
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, #9945FF ${settings.discountPercent * 1.25}%, rgba(255,255,255,0.1) ${settings.discountPercent * 1.25}%)`,
                  accentColor: "#9945FF",
                }}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Quick presets */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Быстрые пресеты</p>
              <div className="flex flex-wrap gap-2">
                {[10, 15, 20, 25, 30, 40, 50].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSettings({ ...settings, discountPercent: v })}
                    className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                    style={{
                      background: settings.discountPercent === v ? "linear-gradient(135deg, #9945FF, #14F195)" : "rgba(153,69,255,0.1)",
                      color: settings.discountPercent === v ? "#000" : "#9945FF",
                      border: "1px solid rgba(153,69,255,0.25)",
                    }}
                  >
                    {v}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timer settings */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(20,241,149,0.04)",
              border: "1px solid rgba(20,241,149,0.15)",
            }}
          >
            <h2 className="font-orbitron font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "rgba(20,241,149,0.15)" }}>⏱️</span>
              Таймер обратного отсчёта
            </h2>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                Дата и время окончания таймера
              </label>
              <input
                type="datetime-local"
                value={settings.timerEndDate}
                onChange={(e) =>
                  setSettings({ ...settings, timerEndDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(20,241,149,0.25)",
                  colorScheme: "dark",
                }}
              />
              <p className="text-xs text-gray-500 mt-2">
                Текущая дата выхода GTA VI: 19 ноября 2026 (00:00)
              </p>
            </div>

            {/* Quick date presets */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Быстрые даты</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Выход игры", value: "2026-11-19T00:00:00" },
                  { label: "+30 дней",   value: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 16) },
                  { label: "+7 дней",    value: new Date(Date.now() +  7 * 86400000).toISOString().slice(0, 16) },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setSettings({ ...settings, timerEndDate: preset.value })}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                    style={{
                      background: "rgba(20,241,149,0.1)",
                      color: "#14F195",
                      border: "1px solid rgba(20,241,149,0.25)",
                    }}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pre-order toggle */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,45,120,0.04)",
              border: "1px solid rgba(255,45,120,0.15)",
            }}
          >
            <h2 className="font-orbitron font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "rgba(255,45,120,0.15)" }}>🎮</span>
              Приём предзаказов
            </h2>

            <div
              className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all"
              style={{
                background: settings.preorderEnabled ? "rgba(20,241,149,0.08)" : "rgba(255,45,120,0.08)",
                border: `1px solid ${settings.preorderEnabled ? "rgba(20,241,149,0.25)" : "rgba(255,45,120,0.25)"}`,
              }}
              onClick={() => setSettings({ ...settings, preorderEnabled: !settings.preorderEnabled })}
            >
              <div>
                <p className="font-semibold text-white">
                  {settings.preorderEnabled ? "✅ Предзаказы открыты" : "❌ Предзаказы закрыты"}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {settings.preorderEnabled
                    ? "Пользователи могут делать предзаказы"
                    : "Кнопка предзаказа недоступна"}
                </p>
              </div>
              <div
                className="relative w-14 h-7 rounded-full transition-all"
                style={{
                  background: settings.preorderEnabled ? "linear-gradient(135deg, #9945FF, #14F195)" : "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-all"
                  style={{ left: settings.preorderEnabled ? "calc(100% - 26px)" : "2px" }}
                />
              </div>
            </div>
          </div>

          {/* Preview / Save block */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 className="font-orbitron font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "rgba(255,215,0,0.15)" }}>📋</span>
              Текущие настройки
            </h2>

            <div className="space-y-3 mb-6">
              {[
                { label: "Скидка Solana",     value: `${settings.discountPercent}%` },
                { label: "Таймер до",          value: new Date(settings.timerEndDate).toLocaleString("ru-RU") },
                { label: "Предзаказы",         value: settings.preorderEnabled ? "Открыты" : "Закрыты" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="text-white font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="btn-sol w-full py-4 rounded-xl text-base relative"
            >
              {saved ? "✅ Сохранено!" : "💾 Сохранить настройки"}
            </button>

            {saved && (
              <p className="text-center text-xs text-[#14F195] mt-2">
                Изменения применены на сайте
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
