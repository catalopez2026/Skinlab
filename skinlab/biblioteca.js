// SKINLAB — biblioteca de productos faciales comunes en farmacias y perfumerías de Argentina.
// Nombres tomados de listados de farmacias argentinas (Farmacia Leloir, Farmacity), octubre 2026.
// concerns: para qué sirve, el primero es su uso principal. tags: ingredientes activos (el test los usa para
// decidir mañana/noche, compatibilidades y piel sensible). Embarazo: "si" = sin activos de riesgo conocidos;
// "nose" = consultar; "no" = evitar. tier: gama de precio orientativa por marca. Sin precios: cada tienda carga los suyos.
window.SKINLAB_LIB = [
  // ---- Dermaglós ----
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Control Espuma de Limpieza', tags: 'purificante seborregulador', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Gel de Limpieza Purificante', tags: 'purificante', cat: 'limpiador', concerns: ['poros', 'acne'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Leche de Limpieza Activa', tags: 'leche desmaquillante suave', cat: 'limpiador', concerns: ['hidratacion', 'rojeces'], skins: ['seca', 'normal', 'sensible'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Tónico Hidratante Descongestivo', tags: 'calmante descongestivo', cat: 'tonico', concerns: ['rojeces', 'hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Sérum Vitamina C Antioxidante', tags: 'vitamina c antioxidante', cat: 'serum', concerns: ['luminosidad', 'manchas', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Sérum Niacinamida Antimanchas', tags: 'niacinamida', cat: 'serum', concerns: ['manchas', 'poros', 'acne'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Sérum Ácido Hialurónico Hidratante Antiedad', tags: 'ácido hialurónico', cat: 'serum', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Sérum Retinol Antiage Nocturno', tags: 'retinol', cat: 'serum', concerns: ['lineas', 'poros', 'luminosidad'], skins: ['todas'], pregnancy: 'no' },
  { brand: 'Dermaglós', tier: 'media', name: 'Ectoína Sérum Facial', tags: 'ectoína prebióticos calmante', cat: 'serum', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Gel para Rojeces', tags: 'calmante pigmento verde', cat: 'hidratante', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'mixta', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Emulsión para Rojeces FPS30', tags: 'calmante fps 30', cat: 'hidratante', concerns: ['rojeces'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Despigmentante', tags: 'despigmentante', cat: 'serum', concerns: ['manchas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Hidratación Diaria Piel Equilibrada a Seca', tags: 'hidratante', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Crema Protectora Hidratante Matificante', tags: 'matificante', cat: 'hidratante', concerns: ['poros', 'hidratacion'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Ultra Hidratación Gel Día y Noche', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'grasa', 'normal'], pregnancy: 'si' },
  { brand: 'Dermaglós', tier: 'media', name: 'Ultra Volumen Crema de Noche', tags: 'antiedad', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['seca', 'normal'], pregnancy: 'nose' },
  { brand: 'Dermaglós', tier: 'media', name: 'Facial Gel Contorno de Ojos', tags: 'hidratante', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Bagóvit (Facial y Solar) ----
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Esencial Agua Micelar Desmaquillante', tags: 'micelar', cat: 'limpiador', concerns: ['hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Bio Agua Micelar Detox', tags: 'micelar detox purificante', cat: 'limpiador', concerns: ['poros'], skins: ['mixta', 'grasa', 'normal'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Esencial Aqua Gel Hidratante Piel Normal a Mixta', tags: 'gel hidratante', cat: 'hidratante', concerns: ['hidratacion', 'poros'], skins: ['normal', 'mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Esencial Crema Hidratante Intensiva', tags: 'crema intensiva', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Lifting Sérum Antiarrugas', tags: 'antiarrugas lifting', cat: 'serum', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Sérum de Colágeno Puro Reafirmante', tags: 'colágeno', cat: 'serum', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Estructura Crema Antiage Día', tags: 'antiedad', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Lifting Crema Antiage Noche', tags: 'antiedad lifting', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['normal', 'seca', 'mixta'], pregnancy: 'nose' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Facial Pro Lifting Contorno de Ojos', tags: 'lifting', cat: 'contorno', concerns: ['lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Bagóvit', tier: 'economica', name: 'Solar Protector Solar Facial con Color FPS45', tags: 'fps 45 solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Garnier ----
  { brand: 'Garnier', tier: 'economica', name: 'Agua Micelar Todo en 1', tags: 'micelar', cat: 'limpiador', concerns: ['hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Garnier', tier: 'economica', name: 'Express Aclara Gel de Limpieza Vitamina C', tags: 'vitamina c', cat: 'limpiador', concerns: ['luminosidad', 'manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Garnier', tier: 'economica', name: 'Express Aclara Sérum Vitamina C', tags: 'vitamina c', cat: 'serum', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Garnier', tier: 'economica', name: 'Skin Active Pure Sérum Iluminador Vitamina C Niacinamida', tags: 'vitamina c niacinamida', cat: 'serum', concerns: ['luminosidad', 'manchas', 'poros'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Garnier', tier: 'economica', name: 'Skin Active Sérum Anti Imperfecciones con Ácido Salicílico', tags: 'ácido salicílico niacinamida', cat: 'serum', concerns: ['acne', 'poros', 'manchas'], skins: ['mixta', 'grasa'], pregnancy: 'nose' },

  // ---- L'Oréal Paris ----
  { brand: "L'Oréal Paris", tier: 'media', name: 'Revitalift Sérum Rellenador Ácido Hialurónico', tags: 'ácido hialurónico', cat: 'serum', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Serum Anti-manchas', tags: 'ácido glicólico', cat: 'serum', concerns: ['manchas', 'luminosidad'], skins: ['todas'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Crema Día Anti-manchas FPS30', tags: 'ácido glicólico fps 30', cat: 'hidratante', concerns: ['manchas', 'luminosidad'], skins: ['normal', 'mixta', 'grasa'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'Glycolic Bright Gel Crema Noche', tags: 'ácido glicólico', cat: 'hidratante', concerns: ['manchas', 'luminosidad'], skins: ['normal', 'mixta', 'grasa'], pregnancy: 'nose' },
  { brand: "L'Oréal Paris", tier: 'media', name: 'UV Defender Fluido Color Protector FPS50+', tags: 'fps 50 solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Neutrogena ----
  { brand: 'Neutrogena', tier: 'media', name: 'Purified Skin Gel de Limpieza', tags: 'ácido salicílico purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'economica', name: 'Deep Clean Gel Limpiador Facial Pomelo', tags: 'purificante', cat: 'limpiador', concerns: ['poros'], skins: ['grasa', 'mixta', 'normal'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Ultra Gentle Gel de Limpieza Piel Seca', tags: 'suave', cat: 'limpiador', concerns: ['hidratacion', 'rojeces'], skins: ['seca', 'sensible'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Hydro Boost Gel Hidratante de Limpieza Piel Normal a Sensible', tags: 'ácido hialurónico suave', cat: 'limpiador', concerns: ['hidratacion'], skins: ['normal', 'sensible', 'seca'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Hydro Boost Serum Hidratante Concentrado', tags: 'ácido hialurónico', cat: 'serum', concerns: ['hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Hydro Boost Water Gel', tags: 'ácido hialurónico gel', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'grasa', 'normal'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Sun Fresh Hydro Boost FPS50 Color', tags: 'fps 50 solar color', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Neutrogena', tier: 'media', name: 'Purified Skin Exfoliante Facial', tags: 'exfoliante purificante', cat: 'exfoliante', concerns: ['poros', 'acne'], skins: ['grasa', 'mixta'], pregnancy: 'si' },

  // ---- Eximia ----
  { brand: 'Eximia', tier: 'media', name: 'Aqua Sensitive Gel Limpiador', tags: 'suave calmante', cat: 'limpiador', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Aqua Mat Gel Microexfoliant', tags: 'exfoliante', cat: 'exfoliante', concerns: ['poros', 'luminosidad'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Mat Serum Seborregulador', tags: 'seborregulador purificante', cat: 'serum', concerns: ['poros', 'acne'], skins: ['mixta', 'grasa'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu Sensitive Serum Facial', tags: 'ácido hialurónico calmante', cat: 'serum', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu B Concentré Serum Antiedad', tags: 'ácido hialurónico antiedad', cat: 'serum', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Legere 3D Ultra Ligera FPS20', tags: 'fps 20', cat: 'hidratante', concerns: ['hidratacion'], skins: ['mixta', 'normal'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Riche Hidratante 3D Ultra Intenso', tags: 'nutritiva', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca'], pregnancy: 'si' },
  { brand: 'Eximia', tier: 'media', name: 'Hyalu Absolut Crema de Noche Facial', tags: 'ácido hialurónico antiedad', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Eximia', tier: 'media', name: 'Hydra Legere Contorno de Ojos', tags: 'hidratante', cat: 'contorno', concerns: ['hidratacion'], skins: ['todas'], pregnancy: 'si' },

  // ---- CeraVe ----
  { brand: 'CeraVe', tier: 'media', name: 'Gel Limpiador Espumoso Piel Normal a Grasa', tags: 'ceramidas niacinamida', cat: 'limpiador', concerns: ['poros', 'acne'], skins: ['grasa', 'mixta', 'normal'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Limpiador Hidratante Piel Normal a Seca', tags: 'ceramidas ácido hialurónico suave', cat: 'limpiador', concerns: ['hidratacion', 'rojeces'], skins: ['seca', 'normal', 'sensible'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Air Foam Limpiador Facial Reequilibrante', tags: 'ceramidas', cat: 'limpiador', concerns: ['poros'], skins: ['mixta', 'normal'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Loción Hidratante Facial', tags: 'ceramidas niacinamida loción', cat: 'hidratante', concerns: ['hidratacion', 'poros'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Crema Hidratante Piel Seca a Muy Seca', tags: 'ceramidas ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion', 'rojeces'], skins: ['seca', 'sensible'], pregnancy: 'si' },
  { brand: 'CeraVe', tier: 'media', name: 'Crema Reparadora Contorno de Ojos', tags: 'ceramidas', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Cetaphil ----
  { brand: 'Cetaphil', tier: 'media', name: 'Loción Limpiadora Piel Seca y Sensible', tags: 'suave', cat: 'limpiador', concerns: ['rojeces', 'hidratacion'], skins: ['seca', 'sensible'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Pro AC Dermacontrol Espuma de Limpieza', tags: 'purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Vitamina C Serum Iluminador Piel Sensible', tags: 'vitamina c', cat: 'serum', concerns: ['luminosidad', 'manchas'], skins: ['sensible', 'todas'], pregnancy: 'si' },
  { brand: 'Cetaphil', tier: 'media', name: 'Healthy Renew Serum Facial', tags: 'antiedad', cat: 'serum', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Cetaphil', tier: 'media', name: 'Optimal Hydration Crema Hidratante Facial de Día', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca', 'normal', 'sensible'], pregnancy: 'si' },

  // ---- La Roche-Posay ----
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Effaclar Gel Limpiador Purificante', tags: 'zinc purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Toleriane Limpiador Hidratante', tags: 'ceramidas suave', cat: 'limpiador', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Effaclar Duo+M', tags: 'niacinamida ácido salicílico', cat: 'serum', concerns: ['acne', 'manchas', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Hyalu B5 Serum', tags: 'ácido hialurónico pantenol', cat: 'serum', concerns: ['hidratacion', 'lineas', 'rojeces'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Pure Vitamin C10 Serum', tags: 'vitamina c', cat: 'serum', concerns: ['luminosidad', 'lineas', 'manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Mela B3 Serum', tags: 'niacinamida despigmentante', cat: 'serum', concerns: ['manchas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Toleriane Double Repair Crema Hidratante', tags: 'ceramidas niacinamida', cat: 'hidratante', concerns: ['hidratacion', 'rojeces'], skins: ['sensible', 'normal', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Cicaplast Baume B5+', tags: 'pantenol calmante', cat: 'hidratante', concerns: ['rojeces', 'hidratacion'], skins: ['sensible', 'seca'], pregnancy: 'si' },
  { brand: 'La Roche-Posay', tier: 'alta', name: 'Anthelios UVmune 400 Fluido Invisible FPS50+', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- ISDIN ----
  { brand: 'ISDIN', tier: 'alta', name: 'Acniben Teen Skin Gel Limpiador', tags: 'purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Moisture Oily & Combination', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Moisture Normal to Dry', tags: 'ácido hialurónico', cat: 'hidratante', concerns: ['hidratacion'], skins: ['normal', 'seca'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Isdinceutics Hyaluronic Eyes', tags: 'ácido hialurónico', cat: 'contorno', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Flavo-C Serum', tags: 'vitamina c', cat: 'serum', concerns: ['luminosidad', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Fotoprotector Fusion Water Magic FPS50', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'ISDIN', tier: 'alta', name: 'Fotoultra Active Unify FPS50+', tags: 'fps 50 solar color despigmentante', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },

  // ---- Vichy ----
  { brand: 'Vichy', tier: 'alta', name: 'Minéral 89 Activador Concentrado Fortificante', tags: 'ácido hialurónico agua termal', cat: 'serum', concerns: ['hidratacion', 'rojeces'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Vichy', tier: 'alta', name: 'Liftactiv Collagen Specialist 16 Serum Antiedad', tags: 'péptidos', cat: 'serum', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },
  { brand: 'Vichy', tier: 'alta', name: 'Liftactiv Collagen Specialist 16 Contorno de Ojos', tags: 'péptidos', cat: 'contorno', concerns: ['lineas'], skins: ['todas'], pregnancy: 'nose' },

  // ---- Nivea ----
  { brand: 'Nivea', tier: 'economica', name: 'Agua Micelar', tags: 'micelar', cat: 'limpiador', concerns: ['hidratacion'], skins: ['todas', 'sensible'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Q10 Power Crema Facial de Día FPS15', tags: 'coenzima q10 fps 15', cat: 'hidratante', concerns: ['lineas', 'hidratacion'], skins: ['normal', 'seca', 'mixta'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Q10 Plus C Crema Facial de Día FPS15', tags: 'coenzima q10 vitamina c fps 15', cat: 'hidratante', concerns: ['lineas', 'luminosidad'], skins: ['normal', 'mixta'], pregnancy: 'si' },
  { brand: 'Nivea', tier: 'economica', name: 'Crema Nivea (lata)', tags: 'crema nutritiva', cat: 'hidratante', concerns: ['hidratacion'], skins: ['seca'], pregnancy: 'si' },

  // ---- Asepxia ----
  { brand: 'Asepxia', tier: 'economica', name: 'Carbón Detox Limpiador Exfoliante Purificante', tags: 'carbón purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa', 'mixta'], pregnancy: 'si' },
  { brand: 'Asepxia', tier: 'economica', name: 'Jabón Azufre Efecto Anti Sebo', tags: 'azufre purificante', cat: 'limpiador', concerns: ['acne', 'poros'], skins: ['grasa'], pregnancy: 'si' },
  { brand: 'Asepxia', tier: 'economica', name: 'Gel Secante Emergencia Transparente', tags: 'secante granitos', cat: 'serum', concerns: ['acne'], skins: ['grasa', 'mixta'], pregnancy: 'nose' },
  { brand: 'Asepxia', tier: 'economica', name: 'Carbón Detox Mascarilla Peel Off Purificante', tags: 'carbón purificante', cat: 'mascarilla', concerns: ['poros', 'acne'], skins: ['grasa', 'mixta'], pregnancy: 'si' },

  // ---- Otras opciones accesibles ----
  { brand: 'Rayito de Sol', tier: 'economica', name: 'Protector Solar Facial Bioactiv FPS50', tags: 'fps 50 solar', cat: 'protector', concerns: ['manchas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Ácido Hialurónico', tags: 'ácido hialurónico', cat: 'serum', concerns: ['hidratacion', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Antioxidante', tags: 'antioxidante vitamina c', cat: 'serum', concerns: ['luminosidad', 'lineas'], skins: ['todas'], pregnancy: 'si' },
  { brand: 'Natceuticals', tier: 'media', name: 'Sérum Retinol', tags: 'retinol', cat: 'serum', concerns: ['lineas', 'acne', 'poros'], skins: ['todas'], pregnancy: 'no' }
];
