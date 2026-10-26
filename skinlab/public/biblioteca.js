// SKINLAB — biblioteca de productos faciales comunes en farmacias y perfumerías de Argentina.
// Nombres tomados de listados de farmacias argentinas (Farmacia Leloir, Farmacity), octubre 2026.
// La clasificación (tipo, para qué sirve, tipo de piel) es orientativa según la línea de cada producto:
// cada tienda puede editarla. Embarazo: "si" = sin activos de riesgo conocidos; "nose" = consultar; "no" = evitar.
// Sin precios: cada tienda carga los suyos. Gama (economica/media/alta): orientativa por marca, para la rutina económica
// cuando la tienda no cargó precios.
window.SKINLAB_LIB = [
  // ---- Dermaglós ----
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Control Espuma de Limpieza', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Gel de Limpieza Purificante', cat: 'limpiador', concerns: ['poros'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Leche de Limpieza Activa', cat: 'limpiador', concerns: ['hidratacion'], skins: ['seca', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Tónico', cat: 'tonico', concerns: ['poros'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Hidratación Diaria Piel Equilibrada a Seca', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Protectora Hidratante Matificante', cat: 'hidratante', concerns: ['poros', 'hidratacion'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Despigmentante', tags: 'manchas', cat: 'serum', concerns: ['manchas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Dermaglós', tier: 'media', name: 'Ultra Hidratación Gel Día y Noche', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'grasa', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Ultra Volumen Crema de Noche', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['seca', 'normal'], pregnancy: 'nose' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Gel Contorno de Ojos', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Eximia ----
  { brand: 'Eximia', tier: 'media', name: 'Aqua Sensitive Gel Limpiador', cat: 'limpiador', concerns: ['rojeces'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Aqua Mat Gel Microexfoliant', cat: 'exfoliante', concerns: ['poros', 'luminosidad'], skins: ['mixta', 'grasa'], pregnancy: 'nose' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Mat Serum Seborregulador', cat: 'serum', concerns: ['poros', 'acne'], skins: ['mixta', 'grasa'], pregnancy: 'nose' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu Sensitive Serum Facial', tags: 'ácido hialurónico calmante', cat: 'serum', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu B Concentré Serum Antiedad', tags: 'ácido hialurónico', cat: 'serum', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Legere 3D Ultra Ligera FPS20', tags: 'fps', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'normal'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Riche Hidratante 3D Ultra Intenso', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu Absolut Crema de Noche Facial', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Legere Contorno de Ojos', cat: 'contorno', concerns: ['hidratacion'], skins: ['todas'], pregnancy: 'si' },

  // ---- La Roche-Posay ----
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Effaclar Gel Limpiador Purificante', tags: 'zinc', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Toleriane Limpiador Hidratante', cat: 'limpiador', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Effaclar Duo+M', tags: 'niacinamida salicílico', cat: 'serum', concerns: ['acne', 'manchas'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Hyalu B5 Serum', tags: 'ácido hialurónico pantenol vitamina b5', cat: 'serum', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Pure Vitamin C10 Serum', tags: 'vitamina c', cat: 'serum', concerns: ['luminosidad', 'manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Mela B3 Serum', tags: 'niacinamida', cat: 'serum', concerns: ['manchas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Toleriane Double Repair Crema Hidratante', tags: 'ceramidas niacinamida', cat: 'hidratante', concerns: ['hidratacion', 'rojeces'], skins: ['sensible', 'normal', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Cicaplast Baume B5+', tags: 'pantenol vitamina b5 calmante', cat: 'hidratante', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Anthelios UVmune 400 Fluido Invisible FPS50+', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- CeraVe ----
  { brand: 'CeraVe', tier: 'media', name: 'Gel Limpiador Espumoso Piel Normal a Grasa', tags: 'ceramidas niacinamida', cat: 'limpiador', concerns: ['poros', 'acne'], skins: ['grasa', 'mixta', 'normal'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Limpiador Hidratante Piel Normal a Seca', tags: 'ceramidas ácido hialurónico', cat: 'limpiador', concerns: ['hidratacion'], skins: ['seca', 'normal', 'sensible'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Air Foam Limpiador Facial Reequilibrante', tags: 'ceramidas', cat: 'limpiador', concerns: ['poros'], skins: ['mixta', 'normal'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Loción Hidratante Facial PM', tags: 'ceramidas niacinamida', cat: 'hidratante', concerns: ['hidratacion', 'poros'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Crema Hidratante Piel Seca a Muy Seca', tags: 'ceramidas ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion', 'rojeces'], skins: ['seca', 'sensible'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Crema Reparadora Contorno de Ojos', tags: 'ceramidas', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Cetaphil ----
  { brand: 'Cetaphil', tier: 'media', name: 'Loción Limpiadora Piel Seca y Sensible', cat: 'limpiador', concerns: ['rojeces', 'hidratacion'], skins: ['seca', 'sensible'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Pro AC Dermacontrol Espuma de Limpieza', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Vitamina C Serum Iluminador Piel Sensible', cat: 'serum', concerns: ['luminosidad', 'manchas'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Healthy Renew Serum Facial', cat: 'serum', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Cetaphil', tier: 'media', name: 'Optimal Hydration Crema Hidratante Facial de Día', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal', 'sensible'], pregnancy: 'si' },

  // ---- ISDIN ----
  { brand: 'ISDIN', tier: 'alta', name: 'Acniben Teen Skin Gel Limpiador', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Moisture Oily & Combination', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Moisture Normal to Dry', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion'], skins: ['normal', 'seca'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Eyes', tags: 'ácido hialurónico', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Flavo-C Serum', tags: 'vitamina c', cat: 'serum', concerns: ['luminosidad', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Fotoprotector Fusion Water Magic FPS50', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Fotoultra Active Unify FPS50+', tags: 'fps 50 solar manchas', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- L'Oréal Paris ----
  { brand: "L'Oréal Paris", tier: 'media', name: 'Revitalift Sérum Rellenador Ácido Hialurónico', tags: 'ácido hialurónico', cat: 'serum', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Serum Anti-manchas', tags: 'ácido glicólico', cat: 'serum', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Crema Día Anti-manchas FPS30', tags: 'ácido glicólico fps', cat: 'hidratante', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Gel Crema Noche', tags: 'ácido glicólico', cat: 'hidratante', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'UV Defender Fluido Color Protector FPS50+', tags: 'fps 50 solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Neutrogena ----
  { brand: 'Neutrogena', tier: 'media', name: 'Hydro Boost Water Gel', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'grasa', 'normal'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Hydro Boost Serum Hidratante Concentrado', tags: 'ácido hialurónico', cat: 'serum', concerns: ['hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Sun Fresh Hydro Boost FPS50 Color', tags: 'fps 50 solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Garnier ----
  { brand: 'Garnier', tier: 'economica', name: 'Express Aclara Gel de Limpieza Vitamina C', tags: 'vitamina c', cat: 'limpiador', concerns: ['luminosidad', 'manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Garnier', tier: 'economica', name: 'Express Aclara Sérum Vitamina C', tags: 'vitamina c', cat: 'serum', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'si' },

  // ---- Nivea ----
  { brand: 'Nivea', tier: 'economica', name: 'Q10 Power Crema Facial de Día FPS15', tags: 'coenzima q10 fps', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['normal', 'seca', 'mixta'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Q10 Plus C Crema Facial de Día FPS15', tags: 'coenzima q10 vitamina c fps', cat: 'hidratante', concerns: ['lineas', 'luminosidad'], skins: ['normal', 'mixta'], pregnancy: 'si' },

  // ---- Vichy ----
  { brand: 'Vichy', tier: 'alta', name: 'Minéral 89 Activador Concentrado Fortificante', tags: 'ácido hialurónico agua termal', cat: 'serum', concerns: ['hidratacion', 'rojeces'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Vichy', tier: 'alta', name: 'Liftactiv Collagen Specialist 16 Serum Antiedad', tags: 'péptidos colágeno', cat: 'serum', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Vichy', tier: 'alta', name: 'Liftactiv Collagen Specialist 16 Contorno de Ojos', tags: 'péptidos', cat: 'contorno', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },

  // ---- Asepxia ----
  { brand: 'Asepxia', tier: 'economica', name: 'Carbón Detox Limpiador Exfoliante Purificante', tags: 'carbón', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'Asepxia', tier: 'economica', name: 'Jabón Azufre Efecto Anti Sebo', tags: 'azufre', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa'], pregnancy: 'nose' },
  { brand: 'Asepxia', tier: 'economica', name: 'Gel Secante Emergencia Transparente', cat: 'serum', concerns: ['acne'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'Asepxia', tier: 'economica', name: 'Carbón Detox Mascarilla Peel Off Purificante', tags: 'carbón', cat: 'mascarilla', concerns: ['poros', 'acne'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  // ---- Opciones económicas y marcas nacionales accesibles ----
  { brand: 'Rayito de Sol', tier: 'economica', name: 'Protector Solar Facial Bioactiv FPS50', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Bagovit', tier: 'economica', name: 'Solar Protector Solar Facial con Color FPS45', tags: 'fps solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Agua Micelar', tags: 'micelar desmaquillante', cat: 'limpiador', concerns: ['hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Crema Nivea (lata)', tags: 'crema clásica', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal'], pregnancy: 'si' },
  { brand: 'Garnier', tier: 'economica', name: 'Agua Micelar Todo en 1', tags: 'micelar desmaquillante', cat: 'limpiador', concerns: ['hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Ácido Hialurónico', tags: 'ácido hialurónico', cat: 'serum', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Antioxidante', tags: 'antioxidante vitamina c', cat: 'serum', concerns: ['luminosidad'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Retinol', tags: 'retinol', cat: 'serum', concerns: ['lineas', 'acne'], skins: ['todas'], pregnancy: 'no' }
];
