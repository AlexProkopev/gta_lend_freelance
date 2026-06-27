export const LANGS = ["en", "es", "fr"] as const;
export type Lang = typeof LANGS[number];

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

type T = Record<string, string>;

const en: T = {
  // Navbar
  nav_preorder: "Pre-Order",
  nav_why: "Why Us",
  nav_solana: "Solana Discount",
  nav_editions: "Editions",
  nav_discount_active: "−{d}% active",
  nav_connect_wallet: "Connect Wallet",
  nav_connected: "Wallet Connected",

  // Hero
  hero_badge: "Official Pre-Order • Solana Exclusive",
  hero_release: "Vice City, USA — November 19, 2026",
  hero_tagline: "Pre-order now — save {d}% when paying with Solana",
  hero_regular: "Regular price",
  hero_sol_price: "Price with Solana −{d}%",
  hero_connect: "Connect wallet →",
  hero_cta: "🎮 Pre-Order Now",
  hero_connect_cta: "Connect & save {d}%",
  hero_countdown: "Until game release",
  hero_scroll: "scroll",

  // Countdown
  cnt_days: "days",
  cnt_hours: "hours",
  cnt_minutes: "minutes",
  cnt_seconds: "seconds",
  cnt_released: "RELEASED!",

  // Why section
  why_label: "Why here",
  why_h1: "Why pre-order via",
  why_h2: "Solana?",
  why_desc:
    "We combined the power of Solana blockchain with the most anticipated game of the decade. Here's why it's worth it.",
  why_r1_title: "25% Solana Discount",
  why_r1_desc:
    "Pay with any Solana token and get an exclusive 25% discount. Fast, cheap, no intermediaries.",
  why_r2_title: "Blockchain Guarantee",
  why_r2_desc:
    "A Solana transaction is an immutable record. Your pre-order is cryptographically secured — uncancellable from our side.",
  why_r3_title: "Instant Transactions",
  why_r3_desc:
    "Solana processes thousands of transactions per second. Confirmation is instant, fee less than $0.001.",
  why_r4_title: "Early Order Bonuses",
  why_r4_desc:
    "First 10,000 pre-orders get the exclusive Vintage Vice City bundle: unique skins, vehicles and in-game currency.",
  why_r5_title: "No Regional Restrictions",
  why_r5_desc:
    "Crypto knows no borders. Pre-order from any country in the world without payment system restrictions.",
  why_r6_title: "Exclusive NFT Badge",
  why_r6_desc:
    'Every Solana pre-order receives a unique "Vice City Pioneer" NFT badge — for early buyers only.',
  stat1_label: "Solana discount",
  stat2_val: "$0.001",
  stat2_label: "Transaction fee",
  stat3_val: "0.4s",
  stat3_label: "Confirmation time",
  stat4_label: "Pre-orders placed",

  // Solana section
  sol_label: "Exclusive to Solana",
  sol_h1: "−{d}% discount",
  sol_h2: "for paying with",
  sol_h3: "Solana",
  sol_desc:
    "Any Solana token is supported — SOL, USDC, BONK, WIF and more. Connect your wallet — discount applied instantly.",
  step1_icon: "👛",
  step1_title: "Install a Solana Wallet",
  step1_desc:
    "Phantom, Solflare or Backpack — pick any. Install the extension and create a wallet in 2 minutes.",
  step2_icon: "💰",
  step2_title: "Fund Your Balance",
  step2_desc:
    "Buy SOL or any Solana token. We support USDC, BONK, WIF, JTO and hundreds more.",
  step3_icon: "🔗",
  step3_title: "Connect Your Wallet",
  step3_desc:
    'Click "Connect Wallet" on the site. The {d}% discount will be applied automatically!',
  step4_icon: "🎮",
  step4_title: "Complete Pre-Order",
  step4_desc:
    "Choose your edition, confirm in wallet. Done! The game will be yours from day one.",
  promo_connected_badge: "Wallet connected!",
  promo_connected_h: "Discount −{d}% activated",
  promo_connected_addr: "Wallet address:",
  promo_connected_sub: "Discount applied at checkout ↓",
  promo_cta: "Pre-order with discount",
  promo_main_h: "Connect a Solana wallet and save",
  promo_main_desc:
    "All Solana wallets are supported. {d}% discount applied automatically on connection. No registration — just a wallet!",
  promo_supported:
    "Supported: Phantom, Solflare, Backpack, Coinbase Wallet and more",
  tokens_label: "We accept any Solana token",

  // Pre-order section
  po_label: "Choose your edition",
  po_h: "Pre-order",
  po_sol_applied: "−{d}% Solana discount applied to all prices!",
  ed_standard: "Standard Edition",
  ed_standard_sub: "Base edition",
  ed_premium: "Premium Edition",
  ed_premium_sub: "Extended edition",
  ed_ultimate: "Ultimate Edition",
  ed_ultimate_sub: "Collector's edition",
  ed_badge_popular: "POPULAR",
  ed_badge_vip: "VIP",
  ed_feat_base: "Full GTA VI game",
  ed_feat_early: "Early access 72 hours",
  ed_feat_starter: "Vice City starter pack",
  ed_feat_vintage: "Vintage Vice City bundle",
  ed_feat_car: "Exclusive vehicle",
  ed_feat_money1: "$100,000 in-game currency",
  ed_feat_cars5: "Exclusive vehicles ×5",
  ed_feat_money5: "$500,000 in-game currency",
  ed_feat_dlc: "All future DLC",
  ed_feat_nft: 'Solana "Pioneer" NFT',
  ed_feat_artbook: "Physical art book",
  ed_sol_discount: "−{d}% Solana discount",
  ed_save: "💰 You save ${s} with Solana",
  ed_connect_desc:
    "Connect wallet to get {d}% off and complete your pre-order",
  ed_order_btn: "🎮 Complete Pre-Order",
  ed_confirming: "Confirming on Solana...",
  ed_select_btn: "Select",
  ed_selected_btn: "✓ Selected",
  ed_price_normal: "Regular price",
  ed_price_sol: "Price with Solana (−{d}%)",
  ed_terms:
    "By clicking you agree to pre-order terms. Release date: 11/19/2026",
  success_title: "Pre-order placed!",
  success_desc:
    "Transaction confirmed on Solana. GTA VI releases November 19, 2026.",
  success_ordered: "You ordered:",
  gallery_label:
    "Vice City — the largest and most detailed GTA world ever",
  gallery1: "Grand Theft Auto VI",
  gallery2: "Official Poster",
  gallery3: "Vice City",
  gallery4: "Jason & Lucia",

  // Ticker
  tick1: "🎮 GTA VI — November 19, 2026",
  tick2: "🟣 −25% with Solana",
  tick3: "⚡ Transactions in 0.4 seconds",
  tick4: "🌊 Vice City awaits you",
  tick5: "💜 Phantom • Solflare • Backpack",
  tick6: "🏆 Vintage Vice City Edition",
  tick7: "🔥 Early access 72 hours",
  tick8: "🌐 Accept SOL, USDC, BONK, WIF & more",

  // Footer
  ft_nav: "Navigation",
  ft_tokens: "Accepted tokens",
  ft_token_desc:
    "All transactions are processed on the Solana blockchain. Network fee < $0.001.",
  ft_desc:
    "Official GTA VI pre-order platform with exclusive 25% discount for Solana users.",
  ft_copy: "© 2026 GTA VI × Solana Preorder. All rights reserved.",
  ft_trademark: "Grand Theft Auto VI is a trademark of",
  ft_network: "Solana Mainnet Beta",
};

const es: T = {
  nav_preorder: "Pre-Orden",
  nav_why: "Por Qué Nosotros",
  nav_solana: "Descuento Solana",
  nav_editions: "Ediciones",
  nav_discount_active: "−{d}% activo",
  nav_connect_wallet: "Conectar Cartera",
  nav_connected: "Cartera Conectada",

  hero_badge: "Pre-Orden Oficial • Exclusivo Solana",
  hero_release: "Vice City, EE.UU. — 19 de noviembre de 2026",
  hero_tagline: "Reserva ahora — ahorra {d}% pagando con Solana",
  hero_regular: "Precio normal",
  hero_sol_price: "Precio con Solana −{d}%",
  hero_connect: "Conectar cartera →",
  hero_cta: "🎮 Hacer Pre-Orden",
  hero_connect_cta: "Conectar y ahorrar {d}%",
  hero_countdown: "Hasta el lanzamiento",
  hero_scroll: "desplaza",

  cnt_days: "días",
  cnt_hours: "horas",
  cnt_minutes: "minutos",
  cnt_seconds: "segundos",
  cnt_released: "¡LANZADO!",

  why_label: "Por qué aquí",
  why_h1: "¿Por qué reservar via",
  why_h2: "Solana?",
  why_desc:
    "Combinamos el poder de Solana con el juego más esperado de la década. Así es por qué vale la pena.",
  why_r1_title: "25% de descuento Solana",
  why_r1_desc:
    "Paga con cualquier token Solana y obtén un 25% de descuento exclusivo. Rápido, barato, sin intermediarios.",
  why_r2_title: "Garantía Blockchain",
  why_r2_desc:
    "Una transacción en Solana es un registro inmutable. Tu pre-orden está protegida criptográficamente.",
  why_r3_title: "Transacciones Instantáneas",
  why_r3_desc:
    "Solana procesa miles de transacciones por segundo. Confirmación instantánea, comisión menor a $0.001.",
  why_r4_title: "Bonos por Reserva Anticipada",
  why_r4_desc:
    "Los primeros 10,000 compradores reciben el paquete exclusivo Vintage Vice City.",
  why_r5_title: "Sin Restricciones Regionales",
  why_r5_desc:
    "La cripto no conoce fronteras. Haz tu pre-orden desde cualquier país del mundo.",
  why_r6_title: "NFT Exclusivo",
  why_r6_desc:
    'Cada pre-orden en Solana recibe un NFT único "Pionero de Vice City".',
  stat1_label: "Descuento Solana",
  stat2_val: "$0.001",
  stat2_label: "Comisión por transacción",
  stat3_val: "0.4s",
  stat3_label: "Tiempo de confirmación",
  stat4_label: "Pre-órdenes realizadas",

  sol_label: "Exclusivo Solana",
  sol_h1: "−{d}% descuento",
  sol_h2: "por pagar con",
  sol_h3: "Solana",
  sol_desc:
    "Se admite cualquier token Solana — SOL, USDC, BONK, WIF y más. Conecta tu cartera — descuento al instante.",
  step1_icon: "👛",
  step1_title: "Instala una Cartera Solana",
  step1_desc:
    "Phantom, Solflare o Backpack — elige cualquiera. Instala la extensión en 2 minutos.",
  step2_icon: "💰",
  step2_title: "Añade Fondos",
  step2_desc:
    "Compra SOL o cualquier token Solana. Admitimos USDC, BONK, WIF, JTO y cientos más.",
  step3_icon: "🔗",
  step3_title: "Conecta tu Cartera",
  step3_desc:
    "¡Haz clic en «Conectar Cartera». El {d}% de descuento se aplica automáticamente!",
  step4_icon: "🎮",
  step4_title: "Completa la Pre-Orden",
  step4_desc:
    "Elige tu edición, confirma en la cartera. ¡Listo! El juego será tuyo desde el primer día.",
  promo_connected_badge: "¡Cartera conectada!",
  promo_connected_h: "Descuento −{d}% activado",
  promo_connected_addr: "Dirección de cartera:",
  promo_connected_sub: "Descuento aplicado al confirmar ↓",
  promo_cta: "Pre-ordenar con descuento",
  promo_main_h: "Conecta una cartera Solana y ahorra",
  promo_main_desc:
    "Se admiten todas las carteras Solana. {d}% de descuento aplicado automáticamente. ¡Sin registro!",
  promo_supported:
    "Compatible con: Phantom, Solflare, Backpack, Coinbase Wallet y más",
  tokens_label: "Aceptamos cualquier token Solana",

  po_label: "Elige tu edición",
  po_h: "Pre-Orden",
  po_sol_applied: "¡−{d}% de descuento Solana aplicado a todos los precios!",
  ed_standard: "Edición Estándar",
  ed_standard_sub: "Edición básica",
  ed_premium: "Edición Premium",
  ed_premium_sub: "Edición extendida",
  ed_ultimate: "Edición Ultimate",
  ed_ultimate_sub: "Edición de coleccionista",
  ed_badge_popular: "POPULAR",
  ed_badge_vip: "VIP",
  ed_feat_base: "Juego completo GTA VI",
  ed_feat_early: "Acceso anticipado 72 horas",
  ed_feat_starter: "Pack inicial Vice City",
  ed_feat_vintage: "Paquete Vintage Vice City",
  ed_feat_car: "Vehículo exclusivo",
  ed_feat_money1: "$100,000 moneda del juego",
  ed_feat_cars5: "Vehículos exclusivos ×5",
  ed_feat_money5: "$500,000 moneda del juego",
  ed_feat_dlc: "Todo el DLC futuro",
  ed_feat_nft: 'NFT "Pionero" de Solana',
  ed_feat_artbook: "Libro de arte físico",
  ed_sol_discount: "−{d}% descuento Solana",
  ed_save: "💰 Ahorras ${s} con Solana",
  ed_connect_desc:
    "Conecta tu cartera para obtener {d}% de descuento",
  ed_order_btn: "🎮 Completar Pre-Orden",
  ed_confirming: "Confirmando en Solana...",
  ed_select_btn: "Seleccionar",
  ed_selected_btn: "✓ Seleccionado",
  ed_price_normal: "Precio normal",
  ed_price_sol: "Precio con Solana (−{d}%)",
  ed_terms:
    "Al hacer clic aceptas los términos. Fecha de lanzamiento: 19/11/2026",
  success_title: "¡Pre-orden realizada!",
  success_desc:
    "Transacción confirmada en Solana. GTA VI sale el 19 de noviembre de 2026.",
  success_ordered: "Ordenaste:",
  gallery_label: "Vice City — el mundo más grande y detallado de GTA",
  gallery1: "Grand Theft Auto VI",
  gallery2: "Póster Oficial",
  gallery3: "Vice City",
  gallery4: "Jason y Lucía",

  tick1: "🎮 GTA VI — 19 de noviembre, 2026",
  tick2: "🟣 −25% con Solana",
  tick3: "⚡ Transacciones en 0.4 segundos",
  tick4: "🌊 Vice City te espera",
  tick5: "💜 Phantom • Solflare • Backpack",
  tick6: "🏆 Edición Vintage Vice City",
  tick7: "🔥 Acceso anticipado 72 horas",
  tick8: "🌐 SOL, USDC, BONK, WIF y más",

  ft_nav: "Navegación",
  ft_tokens: "Tokens aceptados",
  ft_token_desc:
    "Todas las transacciones se procesan en la blockchain de Solana. Comisión < $0.001.",
  ft_desc:
    "Plataforma oficial de pre-orden de GTA VI con descuento exclusivo del 25% para usuarios de Solana.",
  ft_copy: "© 2026 GTA VI × Solana Preorder. Todos los derechos reservados.",
  ft_trademark: "Grand Theft Auto VI es marca registrada de",
  ft_network: "Solana Mainnet Beta",
};

const fr: T = {
  nav_preorder: "Précommande",
  nav_why: "Pourquoi Nous",
  nav_solana: "Réduction Solana",
  nav_editions: "Éditions",
  nav_discount_active: "−{d}% actif",
  nav_connect_wallet: "Connecter Portefeuille",
  nav_connected: "Portefeuille Connecté",

  hero_badge: "Précommande Officielle • Exclusif Solana",
  hero_release: "Vice City, USA — 19 novembre 2026",
  hero_tagline: "Précommandez maintenant — économisez {d}% avec Solana",
  hero_regular: "Prix normal",
  hero_sol_price: "Prix avec Solana −{d}%",
  hero_connect: "Connecter le portefeuille →",
  hero_cta: "🎮 Précommander",
  hero_connect_cta: "Connecter et économiser {d}%",
  hero_countdown: "Jusqu'au lancement",
  hero_scroll: "défiler",

  cnt_days: "jours",
  cnt_hours: "heures",
  cnt_minutes: "minutes",
  cnt_seconds: "secondes",
  cnt_released: "SORTI!",

  why_label: "Pourquoi ici",
  why_h1: "Pourquoi précommander via",
  why_h2: "Solana?",
  why_desc:
    "Nous avons combiné la puissance de Solana avec le jeu le plus attendu de la décennie.",
  why_r1_title: "25% de réduction Solana",
  why_r1_desc:
    "Payez avec n'importe quel token Solana et obtenez une réduction exclusive de 25%. Rapide, bon marché.",
  why_r2_title: "Garantie Blockchain",
  why_r2_desc:
    "Une transaction Solana est un enregistrement immuable. Votre précommande est sécurisée cryptographiquement.",
  why_r3_title: "Transactions Instantanées",
  why_r3_desc:
    "Solana traite des milliers de transactions par seconde. Confirmation instantanée, frais inférieurs à 0,001 $.",
  why_r4_title: "Bonus de Précommande",
  why_r4_desc:
    "Les 10 000 premiers acheteurs reçoivent le pack exclusif Vintage Vice City.",
  why_r5_title: "Sans Restrictions Régionales",
  why_r5_desc:
    "La crypto ne connaît pas de frontières. Précommandez depuis n'importe quel pays du monde.",
  why_r6_title: "NFT Exclusif",
  why_r6_desc:
    'Chaque précommande Solana reçoit un NFT unique "Pionnier de Vice City".',
  stat1_label: "Réduction Solana",
  stat2_val: "0,001$",
  stat2_label: "Frais de transaction",
  stat3_val: "0,4s",
  stat3_label: "Temps de confirmation",
  stat4_label: "Précommandes passées",

  sol_label: "Exclusif Solana",
  sol_h1: "−{d}% de réduction",
  sol_h2: "pour payer avec",
  sol_h3: "Solana",
  sol_desc:
    "Tous les tokens Solana sont acceptés — SOL, USDC, BONK, WIF et plus. Connectez votre portefeuille — réduction instantanée.",
  step1_icon: "👛",
  step1_title: "Installer un Portefeuille Solana",
  step1_desc:
    "Phantom, Solflare ou Backpack — choisissez n'importe lequel. Installez l'extension en 2 minutes.",
  step2_icon: "💰",
  step2_title: "Alimenter Votre Solde",
  step2_desc:
    "Achetez SOL ou n'importe quel token Solana. Nous acceptons USDC, BONK, WIF, JTO et des centaines d'autres.",
  step3_icon: "🔗",
  step3_title: "Connecter Votre Portefeuille",
  step3_desc:
    "Cliquez sur «Connecter le portefeuille». La réduction de {d}% s'applique automatiquement!",
  step4_icon: "🎮",
  step4_title: "Finaliser la Précommande",
  step4_desc:
    "Choisissez votre édition, confirmez dans le portefeuille. Terminé! Le jeu sera à vous dès le premier jour.",
  promo_connected_badge: "Portefeuille connecté!",
  promo_connected_h: "Réduction −{d}% activée",
  promo_connected_addr: "Adresse du portefeuille:",
  promo_connected_sub: "Réduction appliquée à la commande ↓",
  promo_cta: "Précommander avec réduction",
  promo_main_h: "Connectez un portefeuille Solana et économisez",
  promo_main_desc:
    "Tous les portefeuilles Solana sont supportés. Réduction {d}% appliquée automatiquement. Sans inscription!",
  promo_supported:
    "Compatible avec: Phantom, Solflare, Backpack, Coinbase Wallet et plus",
  tokens_label: "Nous acceptons tout token Solana",

  po_label: "Choisissez votre édition",
  po_h: "Précommande",
  po_sol_applied: "−{d}% de réduction Solana appliquée à tous les prix!",
  ed_standard: "Édition Standard",
  ed_standard_sub: "Édition de base",
  ed_premium: "Édition Premium",
  ed_premium_sub: "Édition étendue",
  ed_ultimate: "Édition Ultimate",
  ed_ultimate_sub: "Édition de collection",
  ed_badge_popular: "POPULAIRE",
  ed_badge_vip: "VIP",
  ed_feat_base: "Jeu complet GTA VI",
  ed_feat_early: "Accès anticipé 72 heures",
  ed_feat_starter: "Pack de démarrage Vice City",
  ed_feat_vintage: "Ensemble Vintage Vice City",
  ed_feat_car: "Véhicule exclusif",
  ed_feat_money1: "100 000 $ monnaie du jeu",
  ed_feat_cars5: "Véhicules exclusifs ×5",
  ed_feat_money5: "500 000 $ monnaie du jeu",
  ed_feat_dlc: "Tout le DLC futur",
  ed_feat_nft: 'NFT "Pionnier" Solana',
  ed_feat_artbook: "Livre d'art physique",
  ed_sol_discount: "−{d}% réduction Solana",
  ed_save: "💰 Vous économisez ${s} avec Solana",
  ed_connect_desc:
    "Connectez votre portefeuille pour obtenir {d}% de réduction",
  ed_order_btn: "🎮 Finaliser la Précommande",
  ed_confirming: "Confirmation sur Solana...",
  ed_select_btn: "Sélectionner",
  ed_selected_btn: "✓ Sélectionné",
  ed_price_normal: "Prix normal",
  ed_price_sol: "Prix avec Solana (−{d}%)",
  ed_terms:
    "En cliquant vous acceptez les conditions. Date de sortie: 19/11/2026",
  success_title: "Précommande passée!",
  success_desc:
    "Transaction confirmée sur Solana. GTA VI sort le 19 novembre 2026.",
  success_ordered: "Vous avez commandé:",
  gallery_label:
    "Vice City — le monde le plus grand et détaillé de GTA",
  gallery1: "Grand Theft Auto VI",
  gallery2: "Affiche Officielle",
  gallery3: "Vice City",
  gallery4: "Jason et Lucia",

  tick1: "🎮 GTA VI — 19 novembre 2026",
  tick2: "🟣 −25% avec Solana",
  tick3: "⚡ Transactions en 0,4 seconde",
  tick4: "🌊 Vice City vous attend",
  tick5: "💜 Phantom • Solflare • Backpack",
  tick6: "🏆 Édition Vintage Vice City",
  tick7: "🔥 Accès anticipé 72 heures",
  tick8: "🌐 SOL, USDC, BONK, WIF et plus",

  ft_nav: "Navigation",
  ft_tokens: "Tokens acceptés",
  ft_token_desc:
    "Toutes les transactions sont traitées sur la blockchain Solana. Frais < 0,001 $.",
  ft_desc:
    "Plateforme officielle de précommande de GTA VI avec 25% de réduction exclusive pour les utilisateurs Solana.",
  ft_copy: "© 2026 GTA VI × Solana Preorder. Tous droits réservés.",
  ft_trademark: "Grand Theft Auto VI est une marque déposée de",
  ft_network: "Solana Mainnet Beta",
};

export const translations: Record<Lang, T> = { en, es, fr };

export function translate(
  lang: Lang,
  key: string,
  vars?: Record<string, string | number>
): string {
  let str = translations[lang][key] ?? translations["en"][key] ?? key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    });
  }
  return str;
}
