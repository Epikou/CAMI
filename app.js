/**
 * ===================================================================
 * CAMI Détective Privé — APP.JS
 * Navigation SPA, multilingue, flip cards, estimateur slider, modal contact
 * ===================================================================
 */

'use strict';

/* ========================================================================
   I. TRANSLATIONS — i18n Object
   ======================================================================== */
const TRANSLATIONS = {
  fr: {
    // Navigation
    nav_home: 'Accueil',
    nav_pro: 'Professionnels & Entreprises',
    nav_particuliers: 'Particuliers & Devis',
    nav_international: 'Le Cabinet & Déontologie',
    nav_international_short: 'Cabinet & Déontologie',
    nav_contact: 'Contact Sécurisé',
    mobile_lang_title: 'Langue :',
    // Header CTA
    cta_header_badge: 'Discrétion 100%',
    cta_header_title: 'Demande de Contact',
    // Hero
    hero_badge: 'CABINET AGRÉÉ CNAPS • DEPUIS 2001 • SECRET PROFESSIONNEL',
    hero_title_1: '<span class="nowrap">CAMI INVESTIGATIONS</span><br><span class="nowrap">Détective Privé Agréé</span>',
    hero_title_2: '<span class="nowrap">France-Europe-D.O.M</span>',
    hero_lead: 'Le Cabinet MIGLIACCIO Investigations recueille, en vue de la défense de vos intérêts, des informations et renseignements dans le respect du secret professionnel, et établit des <strong>rapports d\'enquête circonstanciés</strong> susceptibles d\'être produits devant les tribunaux. Interventions en France, Outre-mer et en Europe.',
    hero_cta_contact: 'Prendre Contact Confidentiellement',
    hero_cta_pro: 'Découvrir nos Prestations',
    // Hub
    hub_pro_tag: 'PROTECTION DES ENTREPRISES',
    hub_pro_title: 'Concurrence Déloyale & Fraudes Internes',
    hub_pro_desc: 'Concurrence déloyale, fraudes internes, investigations économiques et cyber-investigations.',
    hub_part_tag: 'ESPACE PARTICULIERS & FAMILLES',
    hub_part_title: 'Litiges Familiaux & Simulateur de Devis',
    hub_part_desc: 'Infidélité, garde d\'enfants, successions, généalogie & conflits familiaux.',
    // Metrics
    metric_1_label: 'Création du cabinet',
    metric_1_sub: 'Détective privé agréé CNAPS',
    metric_2_label: 'Zone d\'intervention',
    metric_2_sub: 'Réseau de cabinets partenaires agréés',
    metric_3_label: 'Secret Professionnel',
    metric_3_sub: 'Toute indiscrétion constitue une faute',
    metric_4_label: 'Disponibilité',
    metric_4_sub: 'Assurance ORUS N° RCPH276IS2853',
    // Présentation
    pres_tag: 'NOTRE DÉMARCHE S\'APPUIE SUR TROIS POSTULATS',
    pres_title: 'Pourquoi Confier Votre Dossier au Cabinet MIGLIACCIO Investigations ?',
    pres_desc: 'Dans une procédure judiciaire, une preuve irrégulière est écartée des débats et peut compromettre irrémédiablement vos droits. Depuis 2001, le Cabinet MIGLIACCIO Investigations fonde chaque mission sur trois engagements simples.',
    pillar_1_title: 'Le Respect du Secret Professionnel',
    pillar_1_text: 'Toute indiscrétion constitue une faute. Vos échanges, vos pièces et les constatations de l\'enquête sont couverts par le secret professionnel, du premier contact jusqu\'à l\'archivage protégé du dossier.',
    pillar_2_title: 'La Transparence d\'un Devis Personnalisé',
    pillar_2_text: 'Avant chaque mission, un devis personnalisé et un contrat écrit en double exemplaire fixent la mission précise et les coûts. Relevé de frais et honoraires détaillé, reçu pour tout versement.',
    pillar_3_title: 'La Garantie de Rapports Utilisables devant les Tribunaux',
    pillar_3_text: 'Rapports circonstanciés, photographies horodatées et constatations chronologiques recueillies dans le strict respect de la législation, susceptibles d\'être produits devant les juridictions.',
    quote_text: '« La vérité est notre métier. Votre confiance, notre engagement. »',
    quote_author_title: 'Détective Privé • Cabinet MIGLIACCIO Investigations',
    // Pro section
    pro_badge: 'PROTECTION DES ENTREPRISES & INVESTIGATIONS PROFESSIONNELLES',
    pro_title: 'Protection des Entreprises & Investigations Professionnelles',
    pro_desc: 'Une expertise dédiée aux dirigeants et directions juridiques pour préserver les actifs de l\'entreprise, détecter les pratiques déloyales et recueillir des preuves recevables.',
    pro_notice_title: 'Tarification Exclusive Sur-Mesure • Aucun Forfait Standardisé',
    pro_notice_text: 'Les enquêtes en environnement professionnel font l\'objet d\'enjeux juridiques et financiers critiques. <strong>Aucun tarif standard n\'est affiché pour les entreprises</strong> : chaque mission requiert un audit de faisabilité préalable gratuit et la signature d\'un accord de confidentialité (NDA). Les honoraires sont établis selon la complexité opérationnelle, les moyens techniques engagés et la durée du mandat d\'investigation.',
    synergy_title: 'Concurrence Déloyale ? Protégez Votre Entreprise.',
    synergy_desc: 'Ne laissez pas des pratiques illicites fragiliser votre activité. Chaque jour compte pour préserver les preuves. Contactez-nous en toute confidentialité.',
    synergy_cta: 'Contacter le Cabinet en Confidentialité',
    // Flip card instructions
    flip_instructions_pro: 'Cliquez ou survolez les cartes pour explorer les missions professionnelles disponibles',
    flip_instructions_part: 'Cliquez ou survolez les cartes pour découvrir les détails de chaque intervention familiale',
    // Particuliers section
    part_tag: 'PROTECTION DES PERSONNES & DES FAMILLES',
    part_title: 'Investigations pour Particuliers & Litiges Familiaux',
    part_desc: 'Des enquêtes menées avec la plus grande délicatesse humaine et une rigueur technique absolue. Preuves photographiques horodatées indispensables pour le Juge aux Affaires Familiales (JAF).',
    // Calculator / Simulator
    calc_title: 'Estimez le Coût de Votre Enquête Particulier',
    calc_desc: 'Ajustez la réglette (slider) pour évaluer instantanément le budget prévisionnel selon le type d\'affaire et le volume d\'heures requis.',
    calc_label_service: 'Nature de votre mission :',
    calc_label_slider: 'Volume d\'intervention estimé :',
    calc_label_urgence: 'Délai de déploiement souhaité :',
    calc_result_label: 'Estimation indicative prévisionnelle HT :',
    calc_result_note: 'Rapport écrit circonstancié avec photos horodatées inclus • Recevable devant le Juge aux Affaires Familiales',
    calc_btn_use: 'Transmettre ce Devis au Cabinet',
    // Méthodologie & Engagements section
    intl_tag: 'CAMI DÉTECTIVE PRIVÉ — CABINET MIGLIACCIO INVESTIGATIONS',
    intl_title: 'Le Cabinet & sa Déontologie',
    intl_desc: 'Un cabinet agréé, fondé en 2001 à Aix-en-Provence, qui conduit chaque mission dans le respect strict du code de déontologie des enquêteurs privés et du secret professionnel.',
    intl_banner_txt: 'LES ÉTAPES DE L\'ENQUÊTE',
    intl_exclusion: 'Exclusion déontologique stricte : le Cabinet n\'effectue aucune mission contraire à la législation ou aux conventions internationales de droits de l\'homme.',
    sec_tag: 'ENGAGEMENT DÉONTOLOGIQUE',
    sec_title: 'Nos Engagements',
    sec_desc: 'La confidentialité n\'est pas un argument commercial : c\'est le fondement légal absolu de notre profession.',
    charter_1_title: 'Discrétion Absolue',
    charter_1_text: 'Le cabinet et ses partenaires agréés sont liés au secret professionnel. Aucune information, identité ou constat ne peut être divulgué à un tiers.',
    charter_2_title: 'Confidentialité',
    charter_2_text: 'Vos échanges et pièces justificatives sont traités avec la plus stricte confidentialité, du premier contact jusqu\'à la remise du rapport.',
    charter_3_title: 'Professionnalisme & Réactivité',
    charter_3_text: 'Un accompagnement personnalisé et réactif, du premier échange jusqu\'au terme de la mission.',
    charter_4_title: 'Respect de la Législation',
    charter_4_text: 'Chaque mission est conduite dans le strict respect du cadre légal applicable aux détectives privés.',
    // Contact section
    contact_tag: 'CANAL DISCRET',
    contact_title: 'Prise de Contact Confidentielle',
    contact_desc: 'Premier échange strictement gratuit, sous secret professionnel et sans engagement. Vos informations sont transmises directement au Cabinet.',
    contact_channels_title: 'Nos Coordonnées',
    contact_channels_sub: 'Pour toute demande, privilégiez nos canaux directs et confidentiels :',
    ch_phone_title: 'Permanence Téléphonique',
    ch_signal_title: 'Signal & WhatsApp Chiffré',
    ch_email_title: 'Courriel Sécurisé Direct',
    form_lock_badge: 'PROTOCOLE HAUTE CONFIDENTIALITÉ — TOUTES VOS DONNÉES SONT PROTÉGÉES',
    form_title: 'Formulaire de Demande d\'Enquête',
    form_sub: 'Toutes vos informations sont traitées avec la plus stricte confidentialité. Premier entretien gratuit et sans engagement.',
    form_label_name: 'Nom ou Pseudonyme (facultatif)',
    form_label_qualite: 'Vous représentez :',
    form_label_tel: 'Téléphone Sécurisé',
    form_label_email: 'E-mail Sécurisé',
    form_discretion_title: 'Consignes de Sécurité pour notre Rappel',
    form_chk_1: 'Ne jamais laisser de message vocal sur ce numéro',
    form_chk_2: 'Présentation sous nom d\'emprunt neutre',
    form_slot_label: 'Créneau de rappel sécurisé préféré :',
    form_label_msg: 'Exposé sommaire de votre situation',
    form_btn_submit: 'Transmettre la Demande Confidentielle',
    form_direct_mail: 'Destinataire sécurisé :',
    // Footer
    footer_motto: 'Cabinet MIGLIACCIO Investigations — Détective Privé. Enquêtes privées et investigations pour entreprises et particuliers, dans le respect du secret professionnel.',
    footer_col_nav: 'Navigation',
    footer_col_legal: 'Cadre Juridique',
    // Lot 2 — Accueil (branches, confiance) & page Cabinet
    branches_tag: 'TROIS BRANCHES BIEN SPÉCIFIQUES',
    branches_title: 'Nos Domaines d\'Intervention',
    branches_desc: 'Soucieux de répondre à toutes vos demandes, CAMI Détective Privé oriente son action autour de trois branches bien spécifiques.',
    branch_1_title: 'Filature',
    branch_1_text: 'Surveillances diverses, enquêtes de moralité (contrats de mariage, constats d\'adultère) ou suivi d\'activités et de fréquentations douteuses.',
    branch_1_link: 'Voir les prestations →',
    branch_2_title: 'Protection de vos Droits',
    branch_2_text: 'Investigation en matière d\'emploi du temps, de travail non déclaré, enquêtes de solvabilité, constats d\'abus de confiance, respect d\'accords civils et commerciaux, recherche de débiteurs.',
    branch_2_link: 'Voir les prestations →',
    branch_3_title: 'Généalogie',
    branch_3_text: 'Recherche d\'informations confidentielles, de personnes disparues (avis de décès, enlèvements, influence de sectes…), recherche d\'héritiers et d\'adresses.',
    branch_3_link: 'Voir les prestations →',
    trust_tag: 'ILS NOUS FONT CONFIANCE',
    trust_text: 'De nombreux clients nous font confiance, qu\'ils soient établissements bancaires et financiers, huissiers, avocats, sociétés de recouvrement ou décideurs de PME et PMI.',
    trust_1: 'Établissements bancaires &amp; financiers',
    trust_2: 'Huissiers de justice',
    trust_3: 'Avocats',
    trust_4: 'Sociétés de recouvrement',
    trust_5: 'Décideurs de PME &amp; PMI',
    trust_ambition: 'Dans tous les cas, une ambition constante :',
    trust_ambition_word: 'être EFFICACE',
    hist_tag: 'DEPUIS 2001 À AIX-EN-PROVENCE',
    hist_title: 'Près de 25 ans d\'investigations privées',
    hist_text: 'Fort de son expérience en cabinet de recherches et d\'investigations pendant près de huit ans, Jean Philippe MIGLIACCIO crée en 2001 le Cabinet MIGLIACCIO Investigations. Le cabinet est soumis à la loi 2003-239 du 18 mars 2003 sur la sécurité intérieure, qui encadre la profession libérale consistant, pour une personne, « à recueillir, même sans faire état de sa qualité ni révéler l\'objet de sa mission, des informations ou des renseignements destinés à des tiers, en vue de la défense de leurs intérêts ».',
    accr_1_title: 'Agrément C.N.A.P.S.',
    accr_1_text: 'Le cabinet est titulaire de toutes les autorisations requises et indispensables à la pratique de l\'activité de détective privé, agent de recherches privées. Son directeur possède l\'agrément délivré par le Conseil national des activités privées de sécurité.',
    accr_2_title: 'Responsabilité Civile Professionnelle',
    accr_2_text: 'Protégé par une assurance responsabilité civile professionnelle qui, en cas de litige, garantit le paiement de dommages et intérêts au client ou aux tiers.',
    accr_3_title: 'France, Outre-mer &amp; Europe',
    accr_3_text: 'Compétent sur tout le territoire français, y compris les départements d\'Outre-mer, et européen. Le cabinet bénéficie d\'un réseau de cabinets partenaires agréés sur l\'ensemble du territoire national.',
    deon_tag: 'DÉCRET N° 2012-870 DU 10 JUILLET 2012',
    deon_title: 'Le Code de Déontologie du Détective Privé',
    deon_desc: 'L\'agence respecte le code de déontologie des personnes physiques ou morales exerçant des activités privées de sécurité et d\'enquêtes privées.',
    deon_client_title: 'Protection du client',
    deon_c1: 'L\'obligation de respecter le secret professionnel (toute indiscrétion constitue une faute).',
    deon_c2: 'L\'obligation de conseiller le client (devoir de conseil).',
    deon_c3: 'L\'obligation de délivrer au client un relevé de frais et honoraires détaillé.',
    deon_c4: 'L\'obligation de respecter un délai de rétractation en cas de contrat à distance ou en dehors de l\'agence.',
    deon_c5: 'L\'obligation de fournir au client (au-delà de 1 000 €) la justification que l\'agence est immatriculée aux organismes sociaux et fiscaux obligatoires.',
    deon_c6: 'La nécessité de mener ses investigations avec tact (dans l\'intérêt du client).',
    deon_c7: 'L\'obligation de protéger les archives informatiques pour que des tiers ne puissent y accéder.',
    deon_c8: 'L\'obligation de crypter les messages transmis aux clients sur Internet (courriels) afin que des tiers non autorisés ne puissent les intercepter, les dévoiler, les utiliser, les monnayer.',
    deon_c9: 'L\'interdiction de discrimination à l\'égard d\'un client.',
    deon_c10: 'L\'interdiction de délivrer des rapports ou attestations de complaisance.',
    deon_c11: 'L\'interdiction de publicité mensongère ou pouvant induire le client en erreur.',
    deon_c12: 'L\'obligation de mentionner sur tous les documents le numéro d\'autorisation délivré par le C.N.A.P.S.',
    deon_lib_title: 'Protection des libertés fondamentales',
    deon_l1: 'Le respect de la vie privée.',
    deon_l2: 'L\'interdiction d\'user de moyens coercitifs.',
    deon_l3: 'L\'incompatibilité d\'exercer la qualité d\'agent de police judiciaire dans la réserve civile de la Police Nationale ou la réserve opérationnelle de la Gendarmerie Nationale avec la profession de détective ou enquêteur privé.',
    deon_l4: 'L\'interdiction de procéder à des écoutes téléphoniques.',
    deon_l5: 'L\'interdiction de prendre des photographies d\'une personne dans un lieu privé sans son accord préalable.',
    deon_l6: 'Possession d\'une assurance responsabilité civile professionnelle (en cas de litige elle permet de garantir le paiement de dommages et intérêts au client ou aux tiers).',
    deon_l7: 'Existence d\'un contrat écrit en double exemplaire (il fixe la mission précise et les coûts : un exemplaire est remis au client).',
    deon_l8: 'Délivrance d\'un reçu pour tout versement (en général sur demande pour un chèque, et d\'office pour règlement en espèces).',
    deon_means: 'En revanche, les enquêteurs de droit privé ne peuvent être tenus, aux termes de la jurisprudence et du droit, qu\'à une <strong>obligation de moyens et non de résultats</strong> (ou de réussite).',
    legal_1: 'Loi pour la sécurité intérieure, qui soumet la profession d\'agent de recherches privées aux dispositions du Livre VI du Code de la sécurité intérieure.',
    legal_2: 'L\'autorisation administrative préalable ne confère aucun caractère officiel à l\'entreprise ou aux personnes qui en bénéficient. Elle n\'engage en aucune manière la responsabilité des pouvoirs publics, particulièrement le CNAPS.',
    legal_3: 'Relatif au code de déontologie des personnes physiques ou morales exerçant des activités privées de sécurité et d\'enquêtes privées.',
    // Prestations — 6 cartes, menu, pied de page
    nav_prestations: 'Prestations',
    nav_home_footer: '01. Accueil',
    nav_prestations_footer: '02. Prestations',
    nav_international_footer: '03. Le Cabinet & Déontologie',
    nav_contact_footer: '04. Contact Sécurisé',
    footer_tagline: 'Cabinet agréé Ministère de l\'Intérieur — C.N.A.P.S.',
    prest_tag: 'FILATURE • PROTECTION DE VOS DROITS • GÉNÉALOGIE',
    prest_title: 'Nos Prestations',
    prest_desc: 'Soucieux de répondre à toutes vos demandes, CAMI Détective Privé oriente son action autour de trois branches bien spécifiques. Chaque mission fait l\'objet d\'un devis personnalisé et d\'un contrat écrit.',
    prest_note: 'Les enquêteurs de droit privé sont tenus à une obligation de moyens et non de résultats. Aucune mission contraire à la loi ou au code de déontologie n\'est acceptée.',
    card_btn_details: 'Détails',
    card_btn_quote: 'Demander un Devis',
    card_btn_return: 'Retourner',
    card_back_who: 'Pour qui :',
    card_back_get: 'Ce que vous recevez :',
    card_back_frame: 'Cadre :',
    card_back_get_text: 'un rapport d\'enquête circonstancié, susceptible d\'être produit devant les juridictions.',
    card_back_frame_text: 'devis personnalisé et contrat écrit avant toute mission, obligation de moyens, secret professionnel.',
    card_1_badge: 'Filature',
    card_1_title: 'Surveillances &amp; Filatures',
    card_1_abstract: 'Surveillances diverses et suivi d\'activités ou de fréquentations douteuses, en lieux publics, dans le strict respect de la vie privée.',
    card_1_h1: 'Filatures pédestres et motorisées',
    card_1_h2: 'Suivi d\'activités et de fréquentations douteuses',
    card_1_h3: 'Constatations photographiées et horodatées',
    card_1_who: 'Particuliers, entreprises, avocats.',
    card_2_badge: 'Étude',
    card_2_title: 'Enquêtes de Moralité',
    card_2_abstract: 'Enquêtes de moralité préalables à un contrat de mariage, constats d\'adultère et éléments utiles aux procédures familiales.',
    card_2_h1: 'Contrats de mariage',
    card_2_h2: 'Constats d\'adultère',
    card_2_h3: 'Éléments utiles devant le juge aux affaires familiales',
    card_2_who: 'Particuliers, familles, avocats.',
    card_3_badge: 'Protection de vos droits',
    card_3_title: 'Emploi du Temps &amp; Travail Non Déclaré',
    card_3_abstract: 'Investigation en matière d\'emploi du temps et de travail non déclaré : vérification d\'activités, de disponibilités et de situations déclarées.',
    card_3_h1: 'Vérification d\'emploi du temps',
    card_3_h2: 'Travail non déclaré ou dissimulé',
    card_3_h3: 'Éléments factuels pour employeurs et conseils',
    card_3_who: 'Entreprises, employeurs, avocats, organismes.',
    card_4_badge: 'Protection de vos droits',
    card_4_title: 'Solvabilité &amp; Recherche de Débiteurs',
    card_4_abstract: 'Enquêtes de solvabilité, recherche de débiteurs, constats d\'abus de confiance et contrôle du respect d\'accords civils et commerciaux.',
    card_4_h1: 'Enquêtes de solvabilité',
    card_4_h2: 'Recherche et localisation de débiteurs',
    card_4_h3: 'Abus de confiance, accords civils et commerciaux',
    card_4_who: 'Établissements bancaires et financiers, huissiers, sociétés de recouvrement, décideurs de PME et PMI.',
    card_5_badge: 'Recherche',
    card_5_title: 'Personnes Disparues',
    card_5_abstract: 'Recherche de personnes disparues : avis de décès, enlèvements, influence de sectes, proches perdus de vue.',
    card_5_h1: 'Avis de décès et recherche de proches',
    card_5_h2: 'Enlèvements et disparitions inquiétantes',
    card_5_h3: 'Influence de sectes',
    card_5_who: 'Familles, avocats, notaires.',
    card_6_badge: 'Généalogie',
    card_6_title: 'Généalogie &amp; Informations Confidentielles',
    card_6_abstract: 'Recherche d\'informations confidentielles et recherches généalogiques : héritiers, filiation, adresses.',
    card_6_h1: 'Recherche d\'héritiers et de filiation',
    card_6_h2: 'Informations confidentielles sous secret professionnel',
    card_6_h3: 'Recherche d\'adresses',
    card_6_who: 'Notaires, avocats, particuliers.',
    // Animation du parcours client
    pf_1_title: 'Premier contact',
    pf_1_sub: 'Confidentiel et sans engagement',
    pf_2_title: 'Devis personnalisé',
    pf_2_sub: 'Avant chaque mission',
    pf_3_title: 'Contrat écrit',
    pf_3_sub: 'En double exemplaire',
    pf_4_title: 'Enquête',
    pf_4_sub: 'Dans le respect de la loi',
    pf_5_title: 'Rapport d\'enquête',
    pf_5_sub: 'Utilisable devant les tribunaux',
    pf_aria: 'Du premier contact à la remise du rapport : premier contact, devis personnalisé, contrat écrit, enquête, rapport d\'enquête.',
    brand_sub: 'Détective Privé Agréé',
    scroll_hint: 'Défiler vers le bas',
    // Toast
    toastOk: 'Votre messagerie s\'est ouverte avec le courriel pré-rempli : il ne reste qu\'à l\'envoyer.',
    form_consent: 'J\'accepte que les informations saisies soient utilisées par le Cabinet MIGLIACCIO Investigations pour me recontacter au sujet de ma demande, sous secret professionnel. <a href="#legal" class="inline-legal-link" data-page="legal">Politique de confidentialité</a> *',
    form_mail_hint: 'En cliquant sur « Transmettre », votre messagerie s\'ouvre avec un courriel pré-rempli adressé directement au cabinet. Aucune donnée ne transite par un service tiers.',
    footer_legal_link: 'Mentions légales &amp; Confidentialité',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_pro: 'Professionals & Business',
    nav_particuliers: 'Individuals & Quote',
    nav_international: 'The Agency & Ethics',
    nav_international_short: 'Agency & Ethics',
    nav_contact: 'Secure Contact',
    mobile_lang_title: 'Language:',
    // Header CTA
    cta_header_badge: '100% Discretion',
    cta_header_title: 'Request Contact',
    // Hero
    hero_badge: 'CNAPS-LICENSED AGENCY • SINCE 2001 • PROFESSIONAL SECRECY',
    hero_title_1: '<span class="nowrap">CAMI INVESTIGATIONS</span><br>Licensed Private Investigator',
    hero_title_2: 'France-Europe-Overseas',
    hero_lead: 'Cabinet MIGLIACCIO Investigations gathers, in defence of your interests, information and intelligence under professional secrecy, and produces <strong>detailed investigation reports</strong> that may be submitted to the courts. Operating in France, its overseas territories and Europe.',
    hero_cta_contact: 'Make Confidential Contact',
    hero_cta_pro: 'Discover Our Services',
    // Hub
    hub_pro_tag: 'BUSINESS PROTECTION',
    hub_pro_title: 'Unfair Competition & Internal Fraud',
    hub_pro_desc: 'Unfair competition, internal fraud, economic investigations and cyber-investigations.',
    hub_part_tag: 'INDIVIDUALS & FAMILIES SPACE',
    hub_part_title: 'Family Disputes & Quote Simulator',
    hub_part_desc: 'Infidelity, child custody, inheritance, genealogy & family disputes.',
    // Metrics
    metric_1_label: 'Agency founded',
    metric_1_sub: 'CNAPS-licensed private investigator',
    metric_2_label: 'Coverage area',
    metric_2_sub: 'Network of licensed partner agencies',
    metric_3_label: 'Professional Secrecy',
    metric_3_sub: 'Any indiscretion is a fault',
    metric_4_label: 'Availability',
    metric_4_sub: 'ORUS Insurance No. RCPH276IS2853',
    // Présentation
    pres_tag: 'OUR APPROACH RESTS ON THREE PRINCIPLES',
    pres_title: 'Why Entrust Your Case to CAMI Détective Privé?',
    pres_desc: 'In legal proceedings, irregular evidence is dismissed and may irrevocably compromise your rights. Since 2001, Cabinet MIGLIACCIO Investigations has built every mission on three simple commitments.',
    pillar_1_title: 'Respect for Professional Secrecy',
    pillar_1_text: 'Any indiscretion is a fault. Your exchanges, documents and the findings of the investigation are covered by professional secrecy, from first contact to the protected archiving of the file.',
    pillar_2_title: 'A Transparent, Personalised Quote',
    pillar_2_text: 'Before every mission, a personalised quote and a written contract in two copies set out the precise assignment and its costs. Itemised statement of fees and expenses, receipt for every payment.',
    pillar_3_title: 'Reports That Stand Up in Court',
    pillar_3_text: 'Detailed reports, timestamped photographs and chronological findings gathered in strict compliance with the law, suitable for submission to the courts.',
    quote_text: '"Truth is our profession. Your trust, our commitment."',
    quote_author_title: 'Private Investigator • CAMI Détective Privé Agency',
    // Pro section
    pro_badge: 'BUSINESS PROTECTION & PROFESSIONAL INVESTIGATIONS',
    pro_title: 'Business Protection & Professional Investigations',
    pro_desc: 'Dedicated expertise for executives and legal departments to protect company assets, detect unfair practices and gather admissible evidence.',
    pro_notice_title: 'Exclusive Custom Pricing • No Standardized Package',
    pro_notice_text: 'Professional investigations involve critical legal and financial stakes. <strong>No standard rates are published for businesses</strong>: each mission requires a free preliminary feasibility audit and the signing of a non-disclosure agreement (NDA). Fees are set according to operational complexity, technical resources deployed and the duration of the investigation mandate.',
    synergy_title: 'Unfair Competition? Protect Your Business.',
    synergy_desc: 'Do not let illicit practices weaken your business. Every day matters to preserve evidence. Contact us in complete confidentiality.',
    synergy_cta: 'Contact the Agency Confidentially',
    flip_instructions_pro: 'Click or hover over the cards to explore available professional missions',
    flip_instructions_part: 'Click or hover over the cards to discover the details of each family intervention',
    // Particuliers section
    part_tag: 'PROTECTION OF INDIVIDUALS & FAMILIES',
    part_title: 'Investigations for Individuals & Family Disputes',
    part_desc: 'Investigations conducted with the utmost human sensitivity and absolute technical rigor. Timestamped photographic evidence essential for the Family Affairs Judge.',
    // Calculator / Simulator
    calc_title: 'Estimate the Cost of Your Individual Investigation',
    calc_desc: 'Adjust the slider to instantly evaluate the projected budget based on the type of case and the number of hours required.',
    calc_label_service: 'Nature of your mission:',
    calc_label_slider: 'Estimated intervention volume:',
    calc_label_urgence: 'Desired deployment timeline:',
    calc_result_label: 'Indicative pre-tax estimate:',
    calc_result_note: 'Written circumstantial report with timestamped photos included • Admissible before the Family Affairs Judge',
    calc_btn_use: 'Submit This Quote to the Agency',
    // Methodology & Commitments section
    intl_tag: 'CAMI DÉTECTIVE PRIVÉ — CABINET MIGLIACCIO INVESTIGATIONS',
    intl_title: 'The Agency & Its Code of Ethics',
    intl_desc: 'A licensed agency, founded in 2001 in Aix-en-Provence, conducting every mission in strict compliance with the private investigators\' code of ethics and professional secrecy.',
    intl_banner_txt: 'THE STEPS OF AN INVESTIGATION',
    intl_exclusion: 'Strict ethical exclusion: the Agency does not conduct any mission contrary to the law or to international human rights conventions.',
    sec_tag: 'ETHICAL COMMITMENT',
    sec_title: 'Our Commitments',
    sec_desc: 'Confidentiality is not a marketing argument: it is the absolute legal foundation of our profession.',
    charter_1_title: 'Absolute Discretion',
    charter_1_text: 'The agency and its licensed partners are bound by professional secrecy. No information, identity or finding may be disclosed to a third party.',
    charter_2_title: 'Confidentiality',
    charter_2_text: 'Your exchanges and supporting documents are handled with the strictest confidentiality, from first contact through delivery of the report.',
    charter_3_title: 'Professionalism & Responsiveness',
    charter_3_text: 'Personalized, responsive support from the first exchange through to the end of the mission.',
    charter_4_title: 'Respect for the Law',
    charter_4_text: 'Every mission is conducted in strict compliance with the legal framework applicable to private investigators.',
    // Contact section
    contact_tag: 'DISCREET CHANNEL',
    contact_title: 'Confidential Contact',
    contact_desc: 'First consultation is free, under professional secrecy and without commitment. Your information is transmitted directly to the Agency.',
    contact_channels_title: 'Our Contact Details',
    contact_channels_sub: 'For any request, use our direct and confidential channels:',
    ch_phone_title: 'Phone Line',
    ch_signal_title: 'Encrypted Signal & WhatsApp',
    ch_email_title: 'Direct Secure Email',
    form_lock_badge: 'HIGH CONFIDENTIALITY PROTOCOL — ALL YOUR DATA IS PROTECTED',
    form_title: 'Investigation Request Form',
    form_sub: 'All your information is handled with the strictest confidentiality. First interview free and without commitment.',
    form_label_name: 'Name or Alias (optional)',
    form_label_qualite: 'You represent:',
    form_label_tel: 'Secure Phone Number',
    form_label_email: 'Secure Email Address',
    form_discretion_title: 'Security Instructions for Our Callback',
    form_chk_1: 'Never leave a voicemail on this number',
    form_chk_2: 'Introduction under neutral assumed name',
    form_slot_label: 'Preferred secure callback window:',
    form_label_msg: 'Brief description of your situation',
    form_btn_submit: 'Submit Confidential Request',
    form_direct_mail: 'Secure recipient:',
    // Footer
    footer_motto: 'Cabinet MIGLIACCIO Investigations — Private Investigator. Private investigations for businesses and individuals, conducted under professional secrecy.',
    footer_col_nav: 'Navigation',
    footer_col_legal: 'Legal Framework',
    // Lot 2 — Accueil (branches, confiance) & page Cabinet
    branches_tag: 'THREE SPECIFIC BRANCHES',
    branches_title: 'Our Areas of Expertise',
    branches_desc: 'To answer every request, CAMI Détective Privé organises its work around three specific branches.',
    branch_1_title: 'Surveillance',
    branch_1_text: 'Various surveillance operations, character investigations (marriage contracts, proof of adultery) or monitoring of suspicious activities and associations.',
    branch_1_link: 'See our services →',
    branch_2_title: 'Protecting Your Rights',
    branch_2_text: 'Investigations into schedules, undeclared work, solvency checks, breach of trust, compliance with civil and commercial agreements, debtor tracing.',
    branch_2_link: 'See our services →',
    branch_3_title: 'Genealogy',
    branch_3_text: 'Confidential information searches, missing persons (death notices, abductions, cult influence…), heir and address tracing.',
    branch_3_link: 'See our services →',
    trust_tag: 'THEY TRUST US',
    trust_text: 'Many clients place their trust in us: banks and financial institutions, bailiffs, lawyers, debt collection companies and SME decision-makers.',
    trust_1: 'Banks &amp; financial institutions',
    trust_2: 'Bailiffs',
    trust_3: 'Lawyers',
    trust_4: 'Debt collection companies',
    trust_5: 'SME decision-makers',
    trust_ambition: 'In every case, one constant ambition:',
    trust_ambition_word: 'to be EFFECTIVE',
    hist_tag: 'SINCE 2001 IN AIX-EN-PROVENCE',
    hist_title: 'Nearly 25 years of private investigation',
    hist_text: 'After nearly eight years of experience in a research and investigation agency, Jean Philippe MIGLIACCIO founded Cabinet MIGLIACCIO Investigations in 2001. The agency is governed by Law 2003-239 of 18 March 2003 on internal security, which regulates the liberal profession consisting, for a person, "in gathering, even without disclosing their capacity or the purpose of their mission, information or intelligence intended for third parties, with a view to defending their interests".',
    accr_1_title: 'C.N.A.P.S. Licence',
    accr_1_text: 'The agency holds every authorisation required to practise as a private investigator and private research agent. Its director holds the licence issued by the French National Council for Private Security Activities.',
    accr_2_title: 'Professional Liability Insurance',
    accr_2_text: 'Covered by professional liability insurance which, in the event of a dispute, guarantees the payment of damages to the client or to third parties.',
    accr_3_title: 'France, Overseas &amp; Europe',
    accr_3_text: 'Competent throughout France, including its overseas departments, and across Europe. The agency relies on a network of licensed partner agencies covering the whole national territory.',
    deon_tag: 'DECREE No. 2012-870 OF 10 JULY 2012',
    deon_title: 'The Private Investigator\'s Code of Ethics',
    deon_desc: 'The agency complies with the code of ethics for individuals and companies carrying out private security and private investigation activities.',
    deon_client_title: 'Protection of the client',
    deon_c1: 'The duty to respect professional secrecy (any indiscretion is a fault).',
    deon_c2: 'The duty to advise the client.',
    deon_c3: 'The duty to provide the client with an itemised statement of fees and expenses.',
    deon_c4: 'The duty to respect a withdrawal period for contracts concluded remotely or outside the agency.',
    deon_c5: 'The duty to provide the client (above €1,000) with proof that the agency is registered with the mandatory social and tax bodies.',
    deon_c6: 'The need to conduct investigations with tact (in the client\'s interest).',
    deon_c7: 'The duty to protect computer archives so that third parties cannot access them.',
    deon_c8: 'The duty to encrypt messages sent to clients over the Internet (e-mails) so that unauthorised third parties cannot intercept, disclose, use or sell them.',
    deon_c9: 'The prohibition of discrimination against a client.',
    deon_c10: 'The prohibition of issuing complacent reports or certificates.',
    deon_c11: 'The prohibition of misleading advertising.',
    deon_c12: 'The duty to state the authorisation number issued by the C.N.A.P.S. on all documents.',
    deon_lib_title: 'Protection of fundamental freedoms',
    deon_l1: 'Respect for privacy.',
    deon_l2: 'The prohibition of coercive means.',
    deon_l3: 'The incompatibility of serving as a judicial police officer in the civil reserve of the National Police or the operational reserve of the National Gendarmerie with the profession of private investigator.',
    deon_l4: 'The prohibition of telephone tapping.',
    deon_l5: 'The prohibition of photographing a person in a private place without their prior consent.',
    deon_l6: 'Holding professional liability insurance (in the event of a dispute it guarantees the payment of damages to the client or to third parties).',
    deon_l7: 'A written contract in two copies (it sets out the precise mission and costs: one copy is given to the client).',
    deon_l8: 'A receipt for every payment (usually on request for cheques, and automatically for cash payments).',
    deon_means: 'However, under case law and the law, private investigators are bound only by an <strong>obligation of means and not of results</strong>.',
    legal_1: 'Internal Security Act, which places the profession of private research agent under Book VI of the Internal Security Code.',
    legal_2: 'Prior administrative authorisation confers no official status on the company or the persons who hold it. It in no way engages the liability of the public authorities, in particular the CNAPS.',
    legal_3: 'On the code of ethics for individuals and companies carrying out private security and private investigation activities.',
    // Prestations — 6 cartes, menu, pied de page
    nav_prestations: 'Services',
    nav_home_footer: '01. Home',
    nav_prestations_footer: '02. Services',
    nav_international_footer: '03. The Agency & Ethics',
    nav_contact_footer: '04. Secure Contact',
    footer_tagline: 'Agency licensed by the Ministry of the Interior — C.N.A.P.S.',
    prest_tag: 'SURVEILLANCE • PROTECTING YOUR RIGHTS • GENEALOGY',
    prest_title: 'Our Services',
    prest_desc: 'To answer every request, CAMI Détective Privé organises its work around three specific branches. Every mission is covered by a personalised quote and a written contract.',
    prest_note: 'Private investigators are bound by an obligation of means, not of results. No mission contrary to the law or to the code of ethics is accepted.',
    card_btn_details: 'Details',
    card_btn_quote: 'Request a Quote',
    card_btn_return: 'Back',
    card_back_who: 'For whom:',
    card_back_get: 'What you receive:',
    card_back_frame: 'Framework:',
    card_back_get_text: 'a detailed investigation report that may be submitted to the courts.',
    card_back_frame_text: 'personalised quote and written contract before any mission, obligation of means, professional secrecy.',
    card_1_badge: 'Surveillance',
    card_1_title: 'Surveillance &amp; Tailing',
    card_1_abstract: 'Various surveillance operations and monitoring of suspicious activities or associations, in public places, in strict respect of privacy.',
    card_1_h1: 'Surveillance on foot and by vehicle',
    card_1_h2: 'Monitoring of suspicious activities and associations',
    card_1_h3: 'Photographed, timestamped findings',
    card_1_who: 'Individuals, businesses, lawyers.',
    card_2_badge: 'Study',
    card_2_title: 'Character Investigations',
    card_2_abstract: 'Character investigations prior to a marriage contract, proof of adultery and evidence useful in family proceedings.',
    card_2_h1: 'Marriage contracts',
    card_2_h2: 'Proof of adultery',
    card_2_h3: 'Evidence useful before the family court',
    card_2_who: 'Individuals, families, lawyers.',
    card_3_badge: 'Protecting your rights',
    card_3_title: 'Schedules &amp; Undeclared Work',
    card_3_abstract: 'Investigations into schedules and undeclared work: verification of activities, availability and declared situations.',
    card_3_h1: 'Schedule verification',
    card_3_h2: 'Undeclared or concealed work',
    card_3_h3: 'Factual evidence for employers and counsel',
    card_3_who: 'Businesses, employers, lawyers, institutions.',
    card_4_badge: 'Protecting your rights',
    card_4_title: 'Solvency &amp; Debtor Tracing',
    card_4_abstract: 'Solvency checks, debtor tracing, breach-of-trust findings and monitoring of compliance with civil and commercial agreements.',
    card_4_h1: 'Solvency checks',
    card_4_h2: 'Tracing and locating debtors',
    card_4_h3: 'Breach of trust, civil and commercial agreements',
    card_4_who: 'Banks and financial institutions, bailiffs, debt collection companies, SME decision-makers.',
    card_5_badge: 'Research',
    card_5_title: 'Missing Persons',
    card_5_abstract: 'Tracing missing persons: death notices, abductions, cult influence, lost relatives.',
    card_5_h1: 'Death notices and tracing relatives',
    card_5_h2: 'Abductions and worrying disappearances',
    card_5_h3: 'Cult influence',
    card_5_who: 'Families, lawyers, notaries.',
    card_6_badge: 'Genealogy',
    card_6_title: 'Genealogy &amp; Confidential Information',
    card_6_abstract: 'Confidential information searches and genealogical research: heirs, lineage, addresses.',
    card_6_h1: 'Tracing heirs and lineage',
    card_6_h2: 'Confidential information under professional secrecy',
    card_6_h3: 'Address tracing',
    card_6_who: 'Notaries, lawyers, individuals.',
    // Animation du parcours client
    pf_1_title: 'First contact',
    pf_1_sub: 'Confidential, no commitment',
    pf_2_title: 'Personalised quote',
    pf_2_sub: 'Before every mission',
    pf_3_title: 'Written contract',
    pf_3_sub: 'In two copies',
    pf_4_title: 'Investigation',
    pf_4_sub: 'Within the law',
    pf_5_title: 'Investigation report',
    pf_5_sub: 'Usable in court',
    pf_aria: 'From first contact to report delivery: first contact, personalised quote, written contract, investigation, investigation report.',
    brand_sub: 'Licensed Private Investigator',
    scroll_hint: 'Scroll down',
    // Toast
    toastOk: 'Your e-mail client has opened with the pre-filled message: just press send.',
    form_consent: 'I agree that the information entered may be used by Cabinet MIGLIACCIO Investigations to contact me about my request, under professional secrecy. <a href="#legal" class="inline-legal-link" data-page="legal">Privacy policy</a> (in French) *',
    form_mail_hint: 'Clicking "Submit" opens your e-mail client with a pre-filled message addressed directly to the agency. No data passes through a third-party service.',
    footer_legal_link: 'Legal notice &amp; Privacy',
  },
  es: {
    // Navigation
    nav_home: 'Inicio',
    nav_pro: 'Profesionales & Empresas',
    nav_particuliers: 'Particulares & Presupuesto',
    nav_international: 'El Gabinete & Deontología',
    nav_international_short: 'Gabinete & Deontología',
    nav_contact: 'Contacto Seguro',
    mobile_lang_title: 'Idioma:',
    // Header CTA
    cta_header_badge: '100% Discreción',
    cta_header_title: 'Solicitar Contacto',
    // Hero
    hero_badge: 'GABINETE AUTORIZADO CNAPS • DESDE 2001 • SECRETO PROFESIONAL',
    hero_title_1: '<span class="nowrap">CAMI INVESTIGATIONS</span><br>Detective Privado Autorizado',
    hero_title_2: 'Francia-Europa-Ultramar',
    hero_lead: 'Cabinet MIGLIACCIO Investigations recoge, en defensa de sus intereses, informaciones bajo secreto profesional, y elabora <strong>informes de investigación circunstanciados</strong> susceptibles de ser presentados ante los tribunales. Intervenciones en Francia, Ultramar y Europa.',
    hero_cta_contact: 'Contactar Confidencialmente',
    hero_cta_pro: 'Descubrir nuestros Servicios',
    // Hub
    hub_pro_tag: 'PROTECCIÓN DE EMPRESAS',
    hub_pro_title: 'Competencia Desleal & Fraudes Internos',
    hub_pro_desc: 'Competencia desleal, fraudes internos, investigaciones económicas y ciber-investigaciones.',
    hub_part_tag: 'ESPACIO PARTICULARES & FAMILIAS',
    hub_part_title: 'Litigios Familiares & Simulador de Presupuesto',
    hub_part_desc: 'Infidelidad, custodia de menores, sucesiones, genealogía & conflictos familiares.',
    // Metrics
    metric_1_label: 'Creación del gabinete',
    metric_1_sub: 'Detective privado autorizado CNAPS',
    metric_2_label: 'Área de intervención',
    metric_2_sub: 'Red de gabinetes asociados autorizados',
    metric_3_label: 'Secreto Profesional',
    metric_3_sub: 'Toda indiscreción constituye una falta',
    metric_4_label: 'Disponibilidad',
    metric_4_sub: 'Seguro ORUS N° RCPH276IS2853',
    // Présentation
    pres_tag: 'NUESTRO ENFOQUE SE BASA EN TRES POSTULADOS',
    pres_title: '¿Por Qué Confiar su Expediente a CAMI Détective Privé?',
    pres_desc: 'En un proceso judicial, una prueba irregular es desestimada y puede comprometer irremediablemente sus derechos. Desde 2001, Cabinet MIGLIACCIO Investigations fundamenta cada misión en tres compromisos sencillos.',
    pillar_1_title: 'El Respeto del Secreto Profesional',
    pillar_1_text: 'Toda indiscreción constituye una falta. Sus intercambios, sus documentos y las constataciones de la investigación están cubiertos por el secreto profesional, desde el primer contacto hasta el archivo protegido del expediente.',
    pillar_2_title: 'La Transparencia de un Presupuesto Personalizado',
    pillar_2_text: 'Antes de cada misión, un presupuesto personalizado y un contrato escrito por duplicado fijan la misión precisa y los costes. Relación detallada de gastos y honorarios, recibo por todo pago.',
    pillar_3_title: 'La Garantía de Informes Utilizables ante los Tribunales',
    pillar_3_text: 'Informes circunstanciados, fotografías con sello de tiempo y constataciones cronológicas recogidas en estricto cumplimiento de la legislación, susceptibles de ser presentados ante los tribunales.',
    quote_text: '"La verdad es nuestro oficio. Su confianza, nuestro compromiso."',
    quote_author_title: 'Detective Privado • Agencia CAMI Détective Privé',
    // Pro section
    pro_badge: 'PROTECCIÓN DE EMPRESAS & INVESTIGACIONES PROFESIONALES',
    pro_title: 'Protección de Empresas & Investigaciones Profesionales',
    pro_desc: 'Experiencia dedicada a directivos y direcciones jurídicas para preservar los activos de la empresa, detectar prácticas desleales y recoger pruebas admisibles.',
    pro_notice_title: 'Tarificación Exclusiva a Medida • Sin Paquetes Estándar',
    pro_notice_text: 'Las investigaciones en entorno profesional implican apuestas jurídicas y financieras críticas. <strong>No se publican tarifas estándar para empresas</strong>: cada misión requiere una auditoría de viabilidad previa gratuita y la firma de un acuerdo de confidencialidad (NDA). Los honorarios se establecen según la complejidad operacional, los medios técnicos desplegados y la duración del mandato de investigación.',
    synergy_title: '¿Competencia Desleal? Proteja su Empresa.',
    synergy_desc: 'No deje que prácticas ilícitas debiliten su actividad. Cada día cuenta para preservar las pruebas. Contáctenos con total confidencialidad.',
    synergy_cta: 'Contactar con la Agencia con Confidencialidad',
    flip_instructions_pro: 'Haga clic o pase el ratón sobre las tarjetas para explorar las misiones profesionales disponibles',
    flip_instructions_part: 'Haga clic o pase el ratón sobre las tarjetas para descubrir los detalles de cada intervención familiar',
    // Particuliers section
    part_tag: 'PROTECCIÓN DE PERSONAS & FAMILIAS',
    part_title: 'Investigaciones para Particulares & Litigios Familiares',
    part_desc: 'Investigaciones llevadas a cabo con la mayor delicadeza humana y rigor técnico absoluto. Pruebas fotográficas con sello de tiempo imprescindibles para el Juez de Familia.',
    // Calculator / Simulator
    calc_title: 'Estime el Coste de su Investigación Particular',
    calc_desc: 'Ajuste el control deslizante para evaluar al instante el presupuesto provisional según el tipo de caso y el volumen de horas requeridas.',
    calc_label_service: 'Naturaleza de su misión:',
    calc_label_slider: 'Volumen de intervención estimado:',
    calc_label_urgence: 'Plazo de despliegue deseado:',
    calc_result_label: 'Estimación indicativa previsional sin IVA:',
    calc_result_note: 'Informe escrito circunstanciado con fotos selladas incluido • Admisible ante el Juez de Familia',
    calc_btn_use: 'Enviar este Presupuesto a la Agencia',
    // Methodology & Commitments section
    intl_tag: 'CAMI DÉTECTIVE PRIVÉ — CABINET MIGLIACCIO INVESTIGATIONS',
    intl_title: 'El Gabinete & su Deontología',
    intl_desc: 'Un gabinete autorizado, fundado en 2001 en Aix-en-Provence, que lleva a cabo cada misión en estricto respeto del código deontológico de los investigadores privados y del secreto profesional.',
    intl_banner_txt: 'LAS ETAPAS DE LA INVESTIGACIÓN',
    intl_exclusion: 'Exclusión deontológica estricta: la Agencia no realiza ninguna misión contraria a la ley ni a los convenios internacionales de derechos humanos.',
    sec_tag: 'COMPROMISO DEONTOLÓGICO',
    sec_title: 'Nuestros Compromisos',
    sec_desc: 'La confidencialidad no es un argumento comercial: es el fundamento legal absoluto de nuestra profesión.',
    charter_1_title: 'Discreción Absoluta',
    charter_1_text: 'El gabinete y sus socios autorizados están sujetos al secreto profesional. Ninguna información, identidad o constatación puede ser divulgada a un tercero.',
    charter_2_title: 'Confidencialidad',
    charter_2_text: 'Sus intercambios y documentos justificativos se tratan con la más estricta confidencialidad, desde el primer contacto hasta la entrega del informe.',
    charter_3_title: 'Profesionalidad & Reactividad',
    charter_3_text: 'Un acompañamiento personalizado y reactivo, desde el primer intercambio hasta el final de la misión.',
    charter_4_title: 'Respeto de la Legislación',
    charter_4_text: 'Cada misión se lleva a cabo en estricto cumplimiento del marco legal aplicable a los detectives privados.',
    // Contact section
    contact_tag: 'CANAL DISCRETO',
    contact_title: 'Contacto Confidencial',
    contact_desc: 'Primer intercambio estrictamente gratuito, bajo secreto profesional y sin compromiso. Su información se transmite directamente a la Agencia.',
    contact_channels_title: 'Nuestros Datos de Contacto',
    contact_channels_sub: 'Para cualquier solicitud, utilice nuestros canales directos y confidenciales:',
    ch_phone_title: 'Línea Telefónica',
    ch_signal_title: 'Signal & WhatsApp Cifrado',
    ch_email_title: 'Correo Electrónico Seguro Directo',
    form_lock_badge: 'PROTOCOLO DE ALTA CONFIDENCIALIDAD — TODOS SUS DATOS ESTÁN PROTEGIDOS',
    form_title: 'Formulario de Solicitud de Investigación',
    form_sub: 'Toda su información se trata con la más estricta confidencialidad. Primera entrevista gratuita y sin compromiso.',
    form_label_name: 'Nombre o Seudónimo (opcional)',
    form_label_qualite: 'Usted representa:',
    form_label_tel: 'Teléfono Seguro',
    form_label_email: 'E-mail Seguro',
    form_discretion_title: 'Instrucciones de Seguridad para nuestra Devolución de Llamada',
    form_chk_1: 'Nunca dejar mensaje de voz en este número',
    form_chk_2: 'Presentación bajo nombre ficticio neutro',
    form_slot_label: 'Franja horaria de devolución de llamada segura preferida:',
    form_label_msg: 'Resumen de su situación',
    form_btn_submit: 'Transmitir la Solicitud Confidencial',
    form_direct_mail: 'Destinatario seguro:',
    // Footer
    footer_motto: 'Cabinet MIGLIACCIO Investigations — Detective Privado. Investigaciones privadas para empresas y particulares, realizadas bajo secreto profesional.',
    footer_col_nav: 'Navegación',
    footer_col_legal: 'Marco Jurídico',
    // Lot 2 — Accueil (branches, confiance) & page Cabinet
    branches_tag: 'TRES RAMAS BIEN ESPECÍFICAS',
    branches_title: 'Nuestros Ámbitos de Intervención',
    branches_desc: 'Para responder a todas sus demandas, CAMI Détective Privé orienta su acción en torno a tres ramas bien específicas.',
    branch_1_title: 'Seguimiento',
    branch_1_text: 'Vigilancias diversas, investigaciones de moralidad (contratos de matrimonio, constatación de adulterio) o seguimiento de actividades y frecuentaciones dudosas.',
    branch_1_link: 'Ver los servicios →',
    branch_2_title: 'Protección de sus Derechos',
    branch_2_text: 'Investigación sobre horarios, trabajo no declarado, investigaciones de solvencia, constatación de abuso de confianza, respeto de acuerdos civiles y comerciales, búsqueda de deudores.',
    branch_2_link: 'Ver los servicios →',
    branch_3_title: 'Genealogía',
    branch_3_text: 'Búsqueda de información confidencial, de personas desaparecidas (avisos de defunción, secuestros, influencia de sectas…), búsqueda de herederos y direcciones.',
    branch_3_link: 'Ver los servicios →',
    trust_tag: 'CONFÍAN EN NOSOTROS',
    trust_text: 'Numerosos clientes confían en nosotros: entidades bancarias y financieras, agentes judiciales, abogados, sociedades de cobro y directivos de PYMES.',
    trust_1: 'Entidades bancarias &amp; financieras',
    trust_2: 'Agentes judiciales',
    trust_3: 'Abogados',
    trust_4: 'Sociedades de cobro',
    trust_5: 'Directivos de PYMES',
    trust_ambition: 'En todos los casos, una ambición constante:',
    trust_ambition_word: 'ser EFICACES',
    hist_tag: 'DESDE 2001 EN AIX-EN-PROVENCE',
    hist_title: 'Casi 25 años de investigación privada',
    hist_text: 'Con casi ocho años de experiencia en un gabinete de búsqueda e investigación, Jean Philippe MIGLIACCIO crea en 2001 el Cabinet MIGLIACCIO Investigations. El gabinete está sometido a la ley 2003-239 del 18 de marzo de 2003 sobre seguridad interior, que regula la profesión liberal consistente, para una persona, «en recoger, incluso sin declarar su condición ni revelar el objeto de su misión, informaciones destinadas a terceros, con vistas a la defensa de sus intereses».',
    accr_1_title: 'Autorización C.N.A.P.S.',
    accr_1_text: 'El gabinete es titular de todas las autorizaciones requeridas e indispensables para ejercer la actividad de detective privado, agente de investigaciones privadas. Su director posee la autorización expedida por el Consejo nacional de actividades privadas de seguridad.',
    accr_2_title: 'Responsabilidad Civil Profesional',
    accr_2_text: 'Protegido por un seguro de responsabilidad civil profesional que, en caso de litigio, garantiza el pago de daños y perjuicios al cliente o a terceros.',
    accr_3_title: 'Francia, Ultramar &amp; Europa',
    accr_3_text: 'Competente en todo el territorio francés, incluidos los departamentos de Ultramar, y europeo. El gabinete cuenta con una red de gabinetes asociados autorizados en todo el territorio nacional.',
    deon_tag: 'DECRETO N° 2012-870 DEL 10 DE JULIO DE 2012',
    deon_title: 'El Código Deontológico del Detective Privado',
    deon_desc: 'La agencia respeta el código deontológico de las personas físicas o jurídicas que ejercen actividades privadas de seguridad e investigación privada.',
    deon_client_title: 'Protección del cliente',
    deon_c1: 'La obligación de respetar el secreto profesional (toda indiscreción constituye una falta).',
    deon_c2: 'La obligación de asesorar al cliente (deber de consejo).',
    deon_c3: 'La obligación de entregar al cliente una relación detallada de gastos y honorarios.',
    deon_c4: 'La obligación de respetar un plazo de desistimiento en caso de contrato a distancia o fuera de la agencia.',
    deon_c5: 'La obligación de facilitar al cliente (por encima de 1.000 €) la justificación de que la agencia está inscrita en los organismos sociales y fiscales obligatorios.',
    deon_c6: 'La necesidad de llevar a cabo las investigaciones con tacto (en interés del cliente).',
    deon_c7: 'La obligación de proteger los archivos informáticos para que terceros no puedan acceder a ellos.',
    deon_c8: 'La obligación de cifrar los mensajes transmitidos a los clientes por Internet (correos electrónicos) para que terceros no autorizados no puedan interceptarlos, revelarlos, utilizarlos o venderlos.',
    deon_c9: 'La prohibición de discriminación respecto a un cliente.',
    deon_c10: 'La prohibición de emitir informes o certificados de complacencia.',
    deon_c11: 'La prohibición de publicidad engañosa o que pueda inducir a error al cliente.',
    deon_c12: 'La obligación de mencionar en todos los documentos el número de autorización expedido por el C.N.A.P.S.',
    deon_lib_title: 'Protección de las libertades fundamentales',
    deon_l1: 'El respeto de la vida privada.',
    deon_l2: 'La prohibición de utilizar medios coercitivos.',
    deon_l3: 'La incompatibilidad de ejercer como agente de policía judicial en la reserva civil de la Policía Nacional o la reserva operativa de la Gendarmería Nacional con la profesión de detective o investigador privado.',
    deon_l4: 'La prohibición de realizar escuchas telefónicas.',
    deon_l5: 'La prohibición de fotografiar a una persona en un lugar privado sin su consentimiento previo.',
    deon_l6: 'Posesión de un seguro de responsabilidad civil profesional (en caso de litigio permite garantizar el pago de daños y perjuicios al cliente o a terceros).',
    deon_l7: 'Existencia de un contrato escrito por duplicado (fija la misión precisa y los costes: un ejemplar se entrega al cliente).',
    deon_l8: 'Entrega de un recibo por todo pago (en general a petición para un cheque, y de oficio para pagos en efectivo).',
    deon_means: 'En cambio, los investigadores de derecho privado solo pueden estar sujetos, según la jurisprudencia y el derecho, a una <strong>obligación de medios y no de resultados</strong>.',
    legal_1: 'Ley de seguridad interior, que somete la profesión de agente de investigaciones privadas a las disposiciones del Libro VI del Código de seguridad interior.',
    legal_2: 'La autorización administrativa previa no confiere ningún carácter oficial a la empresa ni a las personas que se benefician de ella. No compromete en modo alguno la responsabilidad de los poderes públicos, en particular del CNAPS.',
    legal_3: 'Relativo al código deontológico de las personas físicas o jurídicas que ejercen actividades privadas de seguridad e investigación privada.',
    // Prestations — 6 cartes, menu, pied de page
    nav_prestations: 'Servicios',
    nav_home_footer: '01. Inicio',
    nav_prestations_footer: '02. Servicios',
    nav_international_footer: '03. El Gabinete & Deontología',
    nav_contact_footer: '04. Contacto Seguro',
    footer_tagline: 'Gabinete autorizado por el Ministerio del Interior — C.N.A.P.S.',
    prest_tag: 'SEGUIMIENTO • PROTECCIÓN DE SUS DERECHOS • GENEALOGÍA',
    prest_title: 'Nuestros Servicios',
    prest_desc: 'Para responder a todas sus demandas, CAMI Détective Privé orienta su acción en torno a tres ramas bien específicas. Cada misión es objeto de un presupuesto personalizado y de un contrato escrito.',
    prest_note: 'Los investigadores privados están sujetos a una obligación de medios y no de resultados. No se acepta ninguna misión contraria a la ley o al código deontológico.',
    card_btn_details: 'Detalles',
    card_btn_quote: 'Solicitar un Presupuesto',
    card_btn_return: 'Volver',
    card_back_who: 'Para quién:',
    card_back_get: 'Lo que recibe:',
    card_back_frame: 'Marco:',
    card_back_get_text: 'un informe de investigación circunstanciado, susceptible de ser presentado ante los tribunales.',
    card_back_frame_text: 'presupuesto personalizado y contrato escrito antes de toda misión, obligación de medios, secreto profesional.',
    card_1_badge: 'Seguimiento',
    card_1_title: 'Vigilancias &amp; Seguimientos',
    card_1_abstract: 'Vigilancias diversas y seguimiento de actividades o frecuentaciones dudosas, en lugares públicos, en estricto respeto de la vida privada.',
    card_1_h1: 'Seguimientos a pie y en vehículo',
    card_1_h2: 'Seguimiento de actividades y frecuentaciones dudosas',
    card_1_h3: 'Constataciones fotografiadas y con sello de tiempo',
    card_1_who: 'Particulares, empresas, abogados.',
    card_2_badge: 'Estudio',
    card_2_title: 'Investigaciones de Moralidad',
    card_2_abstract: 'Investigaciones de moralidad previas a un contrato de matrimonio, constatación de adulterio y elementos útiles en procedimientos familiares.',
    card_2_h1: 'Contratos de matrimonio',
    card_2_h2: 'Constatación de adulterio',
    card_2_h3: 'Elementos útiles ante el juez de familia',
    card_2_who: 'Particulares, familias, abogados.',
    card_3_badge: 'Protección de sus derechos',
    card_3_title: 'Horarios &amp; Trabajo No Declarado',
    card_3_abstract: 'Investigación sobre horarios y trabajo no declarado: verificación de actividades, disponibilidades y situaciones declaradas.',
    card_3_h1: 'Verificación de horarios',
    card_3_h2: 'Trabajo no declarado u oculto',
    card_3_h3: 'Elementos factuales para empleadores y asesores',
    card_3_who: 'Empresas, empleadores, abogados, organismos.',
    card_4_badge: 'Protección de sus derechos',
    card_4_title: 'Solvencia &amp; Búsqueda de Deudores',
    card_4_abstract: 'Investigaciones de solvencia, búsqueda de deudores, constatación de abuso de confianza y control del respeto de acuerdos civiles y comerciales.',
    card_4_h1: 'Investigaciones de solvencia',
    card_4_h2: 'Búsqueda y localización de deudores',
    card_4_h3: 'Abuso de confianza, acuerdos civiles y comerciales',
    card_4_who: 'Entidades bancarias y financieras, agentes judiciales, sociedades de cobro, directivos de PYMES.',
    card_5_badge: 'Búsqueda',
    card_5_title: 'Personas Desaparecidas',
    card_5_abstract: 'Búsqueda de personas desaparecidas: avisos de defunción, secuestros, influencia de sectas, allegados perdidos de vista.',
    card_5_h1: 'Avisos de defunción y búsqueda de allegados',
    card_5_h2: 'Secuestros y desapariciones inquietantes',
    card_5_h3: 'Influencia de sectas',
    card_5_who: 'Familias, abogados, notarios.',
    card_6_badge: 'Genealogía',
    card_6_title: 'Genealogía &amp; Información Confidencial',
    card_6_abstract: 'Búsqueda de información confidencial e investigaciones genealógicas: herederos, filiación, direcciones.',
    card_6_h1: 'Búsqueda de herederos y filiación',
    card_6_h2: 'Información confidencial bajo secreto profesional',
    card_6_h3: 'Búsqueda de direcciones',
    card_6_who: 'Notarios, abogados, particulares.',
    // Animation du parcours client
    pf_1_title: 'Primer contacto',
    pf_1_sub: 'Confidencial y sin compromiso',
    pf_2_title: 'Presupuesto a medida',
    pf_2_sub: 'Antes de cada misión',
    pf_3_title: 'Contrato escrito',
    pf_3_sub: 'Por duplicado',
    pf_4_title: 'Investigación',
    pf_4_sub: 'Respetando la ley',
    pf_5_title: 'Informe final',
    pf_5_sub: 'Utilizable ante los tribunales',
    pf_aria: 'Del primer contacto a la entrega del informe: primer contacto, presupuesto a medida, contrato escrito, investigación, informe final.',
    brand_sub: 'Detective Privado Autorizado',
    scroll_hint: 'Desplazarse hacia abajo',
    // Toast
    toastOk: 'Su programa de correo se ha abierto con el mensaje prerrellenado: solo falta enviarlo.',
    form_consent: 'Acepto que la información introducida sea utilizada por Cabinet MIGLIACCIO Investigations para contactarme sobre mi solicitud, bajo secreto profesional. <a href="#legal" class="inline-legal-link" data-page="legal">Política de privacidad</a> (en francés) *',
    form_mail_hint: 'Al pulsar «Transmitir», su programa de correo se abre con un mensaje prerrellenado dirigido directamente al gabinete. Ningún dato pasa por un servicio de terceros.',
    footer_legal_link: 'Aviso legal &amp; Privacidad',
  }
};

/* ========================================================================
   II. APP STATE
   ======================================================================== */
const AppState = {
  currentLang: 'fr',
  currentPage: 'page-accueil',
  mobileMenuOpen: false,
  modalOpen: false,
  proCardViewMode: 'flip',   // 'flip' | 'list'
  partCardViewMode: 'flip',
};

/* ========================================================================
   III. DOM ELEMENT CACHE
   ======================================================================== */
const DOM = {};

function cacheDOMElements() {
  DOM.header = document.getElementById('main-header') || document.getElementById('mainHeader');
  DOM.langBtns = document.querySelectorAll('.lang-btn');
  DOM.navItems = document.querySelectorAll('.nav-item[data-page]');
  DOM.mobileNavItems = document.querySelectorAll('.mobile-nav-item[data-page]');
  DOM.pageViews = document.querySelectorAll('.page-view');
  DOM.mobileToggle = document.getElementById('mobileToggle');
  DOM.mobileDrawer = document.getElementById('mobileDrawer');
  DOM.mobileDrawerClose = document.getElementById('mobileDrawerClose');
  DOM.navIndicator = document.getElementById('navIndicator');
  DOM.ctaBtns = document.querySelectorAll('.btn-cta-prominent');
  DOM.hubCards = document.querySelectorAll('.hub-card[data-goto]');
  DOM.flipCards = document.querySelectorAll('.flip-card');
  DOM.contactForm = document.getElementById('confidentialContactForm') || document.getElementById('contact-form');
  DOM.toastContainer = document.getElementById('toast-container') || document.getElementById('toastContainer');
  DOM.modalBackdrop = document.getElementById('contactModal');
  DOM.modalClose = document.getElementById('modalClose');
  DOM.proCardViewBtns = document.querySelectorAll('.view-toggle-btn');
  // Estimator (Particuliers & Familles)
  DOM.estType = document.getElementById('estType');
  DOM.estHours = document.getElementById('estHours');
  DOM.hoursDisplay = document.getElementById('hoursDisplay');
  DOM.sliderFillTrack = document.getElementById('sliderFillTrack');
  DOM.groupHours = document.getElementById('groupHours');
  DOM.estUrgence = document.querySelectorAll('input[name="estUrgence"]');
  DOM.totalEstimate = document.getElementById('totalEstimate');
  DOM.btnUseEstimate = document.getElementById('btnUseEstimate');
}

/* ========================================================================
   IV. LANGUAGE MANAGEMENT
   ======================================================================== */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  AppState.currentLang = lang;

  // Update active button styling
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply translations to data-i18n attributes
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.getElementById('scrollHint')?.setAttribute('aria-label', t.scroll_hint);

  // Set document language attribute
  document.documentElement.lang = lang;

  // Les libellés du menu changent de largeur : la pastille suit
  updateNavIndicator(AppState.currentPage);

  // Persist preference
  try { localStorage.setItem('cami_lang', lang); } catch(e) {}
}

function initLanguage() {
  let savedLang = 'fr';
  try { savedLang = localStorage.getItem('cami_lang') || 'fr'; } catch(e) {}
  const browserLang = navigator.language?.slice(0, 2);
  const bestLang = TRANSLATIONS[savedLang] ? savedLang : (TRANSLATIONS[browserLang] ? browserLang : 'fr');
  setLanguage(bestLang);
}

/* ========================================================================
   V. SPA NAVIGATION
   ======================================================================== */
/**
 * pageKey: short key like 'accueil', 'pro', 'particuliers', 'cabinet', 'contact'
 * The actual DOM section ID is 'page-{pageKey}'
 */
/* Titres d'onglet par page (référencement et repère visiteur) */
const PAGE_TITLES = {
  accueil: 'CAMI Détective Privé | Cabinet MIGLIACCIO Investigations — Aix-en-Provence',
  prestations: 'Nos Prestations | CAMI Détective Privé — Aix-en-Provence',
  cabinet: 'Le Cabinet & Déontologie | CAMI Détective Privé — Aix-en-Provence',
  contact: 'Contact Confidentiel & Devis | CAMI Détective Privé — Aix-en-Provence',
  legal: 'Mentions Légales & Confidentialité | CAMI Détective Privé',
};

function navigateTo(pageKey) {
  const pageId = pageKey.startsWith('page-') ? pageKey : `page-${pageKey}`;
  const shortKey = pageId.replace('page-', '');

  if (AppState.currentPage === pageId) return;

  // Titre d'onglet et adresse partageable (#pro, #cabinet, …)
  if (PAGE_TITLES[shortKey]) document.title = PAGE_TITLES[shortKey];
  const wantedHash = shortKey === 'accueil' ? '' : '#' + shortKey;
  if (location.hash !== wantedHash) {
    try { history.pushState({ page: shortKey }, '', wantedHash || location.pathname + location.search); } catch (err) { /* ignore */ }
  }
  document.dispatchEvent(new CustomEvent('cami:navigated', { detail: { page: shortKey } }));

  // Fade out all views
  DOM.pageViews.forEach(view => {
    view.classList.remove('active');
  });

  // Activate target view
  const target = document.getElementById(pageId);
  if (target) {
    // setTimeout plutôt que requestAnimationFrame : fonctionne aussi dans un onglet en arrière-plan
    setTimeout(() => {
      target.classList.add('active');
      AppState.currentPage = pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Refresh estimator price when navigating to particuliers page
      if (shortKey === 'particuliers') {
        setTimeout(computeEstimation, 50);
      }
    }, 0);
  }

  // Update nav pill indicator
  updateNavIndicator(shortKey);

  // Update nav items active state (data-page holds short key)
  DOM.navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.page === shortKey);
  });
  DOM.mobileNavItems.forEach(item => {
    item.classList.toggle('active', item.dataset.page === shortKey);
  });

  // Close mobile drawer
  if (AppState.mobileMenuOpen) closeMobileDrawer();
}

function updateNavIndicator(pageKey) {
  if (!DOM.navIndicator) return;
  // Accepte aussi bien « accueil » que « page-accueil » (cas du redimensionnement)
  const shortKey = String(pageKey).replace(/^page-/, '');
  const activeLink = document.querySelector(`.nav-item[data-page="${shortKey}"]`);
  if (!activeLink) { DOM.navIndicator.style.width = '0'; return; }
  const navWrapper = activeLink.closest('.dynamic-nav');
  if (!navWrapper) return;
  const navRect = navWrapper.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  DOM.navIndicator.style.width = linkRect.width + 'px';
  DOM.navIndicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
}

/* ========================================================================
   VI. MOBILE DRAWER
   ======================================================================== */
function openMobileDrawer() {
  AppState.mobileMenuOpen = true;
  DOM.mobileDrawer?.classList.add('open');
  DOM.mobileToggle?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
  AppState.mobileMenuOpen = false;
  DOM.mobileDrawer?.classList.remove('open');
  DOM.mobileToggle?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ========================================================================
   VII. STICKY HEADER SCROLL
   ======================================================================== */
function onScroll() {
  if (!DOM.header) return;
  DOM.header.classList.toggle('scrolled', window.scrollY > 50);
}

/* ========================================================================
   VIII. FLIP CARDS
   ======================================================================== */
function initFlipCards() {
  document.querySelectorAll('.flip-card').forEach(card => {
    // Click to flip (for touch/mobile)
    card.addEventListener('click', (e) => {
      // Don't flip if clicking a button inside the card
      if (e.target.closest('button:not(.flip-trigger-btn), a, .btn-primary-sm')) return;
      card.classList.toggle('is-flipped');
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });

    // Dedicated flip trigger buttons
    const flipTriggerBtn = card.querySelector('.btn-flip-trigger');
    if (flipTriggerBtn) {
      flipTriggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('is-flipped');
      });
    }

    // Return buttons (back face)
    const returnBtn = card.querySelector('.btn-flip-return');
    if (returnBtn) {
      returnBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('is-flipped');
      });
    }
  });
}

/* ========================================================================
   IX. ESTIMATEUR SLIDER (Particuliers & Familles)
   ======================================================================== */
const URGENCY_RATES = {
  'standard': { multiplier: 1.0, label: 'Sous 48h - 72h' },
  'urgent': { multiplier: 1.15, label: 'Urgent 24h (+15%)' },
  'immediat': { multiplier: 1.30, label: 'Immédiat 24/7 (+30%)' }
};

function computeEstimation() {
  if (!DOM.estType || !DOM.totalEstimate) return;

  const selectedOption = DOM.estType.options[DOM.estType.selectedIndex];
  if (!selectedOption) return;

  const rate = parseFloat(selectedOption.getAttribute('data-rate')) || 95;
  const isFixed = selectedOption.getAttribute('data-fixed') === 'true';

  let hours = parseInt(DOM.estHours?.value || '10', 10);
  if (isNaN(hours) || hours < 4) hours = 10;

  let basePrice = 0;

  if (isFixed) {
    basePrice = rate;
    if (DOM.groupHours) {
      DOM.groupHours.style.opacity = '0.45';
      DOM.groupHours.style.pointerEvents = 'none';
      DOM.groupHours.style.filter = 'grayscale(0.4)';
    }
    if (DOM.hoursDisplay) {
      DOM.hoursDisplay.textContent = 'Forfait recherche fixe';
    }
  } else {
    basePrice = rate * hours;
    if (DOM.groupHours) {
      DOM.groupHours.style.opacity = '1';
      DOM.groupHours.style.pointerEvents = 'auto';
      DOM.groupHours.style.filter = 'none';
    }
    if (DOM.hoursDisplay) {
      DOM.hoursDisplay.textContent = `${hours} heure${hours > 1 ? 's' : ''}`;
    }

    // Update slider fill track
    if (DOM.sliderFillTrack && DOM.estHours) {
      const min = parseInt(DOM.estHours.min || '4', 10);
      const max = parseInt(DOM.estHours.max || '40', 10);
      const pct = Math.max(0, Math.min(100, ((hours - min) / (max - min)) * 100));
      DOM.sliderFillTrack.style.width = `${pct}%`;
    }
  }

  // Calculate Urgency Multiplier
  let urgencyKey = 'standard';
  const checkedUrgence = document.querySelector('input[name="estUrgence"]:checked');
  if (checkedUrgence && URGENCY_RATES[checkedUrgence.value]) {
    urgencyKey = checkedUrgence.value;
  }
  const urgencyInfo = URGENCY_RATES[urgencyKey] || URGENCY_RATES['standard'];

  const total = Math.round(basePrice * urgencyInfo.multiplier);

  // Update total in Euro
  const formatted = new Intl.NumberFormat('fr-FR').format(total) + ' €';
  DOM.totalEstimate.textContent = formatted;
}

function initEstimator() {
  if (!DOM.estType && !document.getElementById('estType')) return;
  if (!DOM.estType) cacheDOMElements();

  if (DOM.estType) {
    DOM.estType.addEventListener('change', computeEstimation);
  }

  if (DOM.estHours) {
    DOM.estHours.addEventListener('input', computeEstimation);
    DOM.estHours.addEventListener('change', computeEstimation);
  }

  const urgenceRadios = document.querySelectorAll('input[name="estUrgence"]');
  urgenceRadios.forEach(radio => {
    radio.addEventListener('change', computeEstimation);
    radio.addEventListener('click', computeEstimation);
  });

  if (DOM.btnUseEstimate) {
    DOM.btnUseEstimate.addEventListener('click', () => {
      const selectedOption = DOM.estType?.options[DOM.estType.selectedIndex];
      const serviceText = selectedOption?.textContent?.split('(')[0]?.trim() || 'Enquête Particulier';
      const isFixed = selectedOption?.getAttribute('data-fixed') === 'true';
      const hours = DOM.estHours?.value || '10';

      let urgencyKey = 'standard';
      const checkedUrgence = document.querySelector('input[name="estUrgence"]:checked');
      if (checkedUrgence) urgencyKey = checkedUrgence.value;
      const urgencyLabel = URGENCY_RATES[urgencyKey]?.label || 'Sous 48h - 72h';

      const totalFormatted = DOM.totalEstimate?.textContent?.trim() || '950 €';

      // Navigate to contact view
      navigateTo('page-contact');

      // Pre-fill contact form
      const messageField = document.getElementById('contactMessage');
      if (messageField) {
        messageField.value = `Demande de prise en charge issue du simulateur :\n• Prestation : ${serviceText}\n• ${isFixed ? 'Formule : Forfait recherche fixe' : `Volume prévisionnel : ${hours} heures d'intervention`}\n• Délai de déploiement souhaité : ${urgencyLabel}\n• Estimation indicative calculée : ${totalFormatted} HT\n\nMerci de me recontacter selon mes consignes de sécurité et discrétion.`;
      }

      const qualiteSelect = document.getElementById('contactQualite');
      if (qualiteSelect) {
        qualiteSelect.value = 'particulier';
      }

      const subjectField = document.getElementById('formSubject');
      if (subjectField) {
        subjectField.value = `[Devis Simulateur ${totalFormatted} HT] ${serviceText}`;
      }

      showToast(`Votre devis de ${totalFormatted} HT a été prérempli dans le formulaire de contact.`);

      setTimeout(() => {
        const targetForm = document.querySelector('.contact-form-card') || document.getElementById('confidentialContactForm');
        if (targetForm) {
          targetForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        document.getElementById('contactNom')?.focus();
      }, 250);
    });
  }

  // Initial calculation
  computeEstimation();
}

/* ========================================================================
   XI. CONTACT FORM & MODAL
   ======================================================================== */
function openContactModal() {
  if (!DOM.modalBackdrop) return;
  AppState.modalOpen = true;
  DOM.modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const firstInput = DOM.modalBackdrop.querySelector('input, textarea, select');
    if (firstInput) firstInput.focus();
  }, 350);
}

function closeContactModal() {
  if (!DOM.modalBackdrop) return;
  AppState.modalOpen = false;
  DOM.modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function showToast(message, type = 'success') {
  if (!DOM.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
    <span>${message}</span>
  `;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 350);
  }, 4500);
}

/**
 * Envoi sans service tiers : le formulaire compose un courriel dans la
 * messagerie du visiteur (lien mailto:) adressé directement au cabinet.
 * Aucune donnée ne transite par un serveur externe.
 */
function buildMailFromForm(form) {
  const val = id => (form.querySelector('#' + id)?.value || '').trim();
  const checked = id => !!form.querySelector('#' + id)?.checked;

  const lines = [
    'Demande confidentielle transmise depuis le site CAMI Détective Privé',
    '',
    'Nom ou pseudonyme : ' + (val('contactNom') || '(non renseigné)'),
    'Téléphone : ' + val('contactTel'),
    'E-mail : ' + val('contactEmail'),
    '',
    'Exposé de la situation :',
    val('contactMessage'),
    '',
    'Consentement au traitement des données (RGPD) : ' + (checked('chkConsent') ? 'accepté' : 'non'),
  ];

  const to = form.dataset.mailTo || 'carte.sarl.3@wanadoo.fr';
  const subject = form.querySelector('#formSubject')?.value || '[CAMI Détective Privé] Nouvelle Demande de Mission';
  return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;

  const btn = form.querySelector('[type="submit"]');
  const originalHTML = btn?.innerHTML;
  if (btn) {
    btn.innerHTML = '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Ouverture de votre messagerie…';
    btn.disabled = true;
  }

  // Ouvre la messagerie du visiteur avec le courriel pré-rempli
  window.location.href = buildMailFromForm(form);

  setTimeout(() => {
    if (btn) {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }
    closeContactModal();
    const t = TRANSLATIONS[AppState.currentLang];
    showToast(t?.toastOk || 'Votre messagerie s\'est ouverte avec le courriel pré-rempli : il ne reste qu\'à l\'envoyer.');
  }, 1200);
}

/* ========================================================================
   XII. METRICS COUNTER ANIMATION
   ======================================================================== */
function animateCounter(el, target, suffix, duration = 1800) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const interval = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + suffix;
    if (start >= target) clearInterval(interval);
  }, 16);
}

function initMetricsCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const metrics = entry.target.querySelectorAll('.metric-val[data-count]');
        metrics.forEach(el => {
          const val = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          if (!isNaN(val)) animateCounter(el, val, suffix);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.metrics-bar').forEach(bar => observer.observe(bar));
}

/* ========================================================================
   XIII. SCROLL REVEAL (Intersection Observer)
   ======================================================================== */
function initScrollReveal() {
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1);
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(revealStyle);

  // Add reveal class to cards and section headers
  document.querySelectorAll(
    '.pillar-card, .flip-card, .charter-card, .hub-item, .section-header, .quote-callout, .metrics-bar, .channel-item, .metric-card'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    const delay = (i % 4);
    if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
  });

  const revealAll = () => document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));

  // Sécurité : sans IntersectionObserver ou si les animations sont réduites, tout est visible immédiatement
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reducedMotion) {
    revealAll();
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Filet de sécurité : quoi qu'il arrive, aucun contenu ne reste invisible plus de 1,2 s
  setTimeout(revealAll, 1200);
  // Et à chaque changement de page, les éléments de la nouvelle vue apparaissent rapidement
  document.addEventListener('cami:navigated', () => setTimeout(revealAll, 400));
}

/* ========================================================================
   XIII bis. DÉMONSTRATION DE RETOURNEMENT (première visite de la page Prestations)
   Les cartes se retournent l'une après l'autre, restent au verso, puis reviennent :
   le visiteur comprend qu'elles sont interactives. Une seule fois par visite.
   ======================================================================== */
function playFlipDemo() {
  const cards = [...document.querySelectorAll('#prestCardsGrid .flip-card')];
  if (!cards.length) return;
  // Rejouée à chaque arrivée sur la page ; on évite seulement deux vagues simultanées
  if (playFlipDemo.running) return;
  playFlipDemo.running = true;

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stagger = reduced ? 100 : 150;
  const hold = reduced ? 800 : 1200;
  const start = 700; // laisse le temps à la page d'apparaître

  cards.forEach((card, i) => {
    card.classList.add('is-demo');
    setTimeout(() => card.classList.add('is-flipped'), start + i * stagger);
    setTimeout(() => {
      card.classList.remove('is-flipped');
      setTimeout(() => card.classList.remove('is-demo'), 700);
    }, start + i * stagger + hold + cards.length * stagger);
  });
  setTimeout(() => { playFlipDemo.running = false; }, start + cards.length * stagger * 2 + hold + 800);
}

document.addEventListener('cami:navigated', (e) => {
  if (e.detail && e.detail.page === 'prestations') playFlipDemo();
});
// Démonstration aussi si le site s'ouvre directement sur #prestations
if (location.hash === '#prestations') {
  setTimeout(playFlipDemo, 300);
}

/* ========================================================================
   XIV. EVENT LISTENERS SETUP
   ======================================================================== */
function setupEventListeners() {
  // Scroll header
  window.addEventListener('scroll', onScroll, { passive: true });

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Desktop nav
  DOM.navItems.forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
  });

  // Mobile nav
  DOM.mobileNavItems.forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
  });

  // Mobile toggle
  DOM.mobileToggle?.addEventListener('click', () => {
    AppState.mobileMenuOpen ? closeMobileDrawer() : openMobileDrawer();
  });

  // Mobile drawer close
  DOM.mobileDrawerClose?.addEventListener('click', closeMobileDrawer);

  // Click outside mobile drawer to close
  DOM.mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === DOM.mobileDrawer) closeMobileDrawer();
  });

  // Hub gateway cards (use data-page-target)
  document.querySelectorAll('[data-page-target]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.pageTarget;
      if (target) navigateTo(target);
    });
  });

  // Liens texte vers une page (pied de page, mentions légales, consentement)
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  // Ancres internes de la page Mentions légales (sommaire)
  document.querySelectorAll('.legal-toc a[href^="#legal-"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  // Also legacy data-goto
  DOM.hubCards.forEach(card => {
    card.addEventListener('click', () => {
      const goto = card.dataset.goto;
      if (goto) navigateTo(goto);
    });
  });

  // CTA buttons → navigate to contact page
  DOM.ctaBtns.forEach(btn => {
    if (btn.id === 'btnUseEstimate' || btn.type === 'submit') return;
    btn.addEventListener('click', (e) => {
      // Only intercept if no data-page-target (already handled above)
      if (!btn.dataset.pageTarget) {
        e.preventDefault();
        navigateTo('contact');
      }
    });
  });

  // Modal close
  DOM.modalClose?.addEventListener('click', closeContactModal);
  DOM.modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === DOM.modalBackdrop) closeContactModal();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (AppState.modalOpen) closeContactModal();
      if (AppState.mobileMenuOpen) closeMobileDrawer();
    }
  });

  // Contact forms (main + modal)
  document.querySelectorAll('.contact-form-handler').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
  DOM.contactForm?.addEventListener('submit', handleFormSubmit);

  // Audit request button (Pro page)
  document.querySelectorAll('.trigger-audit').forEach(btn => {
    btn.addEventListener('click', () => {
      // Pre-fill the subject in the contact form if possible
      const subjectSelect = document.getElementById('form-object');
      if (subjectSelect) subjectSelect.value = 'audit';
      navigateTo('page-contact');
    });
  });
}

/* ========================================================================
   XV. PROGRESSIVE ENHANCEMENT — Smooth nav indicator on resize
   ======================================================================== */
function onResize() {
  updateNavIndicator(AppState.currentPage);
}

/* ========================================================================
   XVI. INITIALIZATION
   ======================================================================== */
/* Petite flèche : affichée tant qu'il reste de la page à faire défiler */
function initScrollHint() {
  const hint = document.getElementById('scrollHint');
  if (!hint) return;
  const refresh = () => {
    const root = document.documentElement;
    const remaining = root.scrollHeight - window.innerHeight - window.scrollY;
    hint.classList.toggle('is-visible', remaining > 8);
  };
  hint.addEventListener('click', () => {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.8), behavior: 'smooth' });
  });
  window.addEventListener('scroll', refresh, { passive: true });
  window.addEventListener('resize', refresh, { passive: true });
  document.addEventListener('cami:navigated', () => setTimeout(refresh, 60));
  // La hauteur change aussi quand un bloc s'ouvre ou quand la langue change
  if ('ResizeObserver' in window) new ResizeObserver(refresh).observe(document.body);
  refresh();
}

function init() {
  cacheDOMElements();
  initLanguage();
  setupEventListeners();
  initFlipCards();
  initEstimator();
  initScrollReveal();
  initMetricsCounters();
  initScrollHint();

  // Show initial page (HTML already has class active, just sync state)
  const firstPage = document.getElementById('page-accueil');
  if (firstPage) {
    // Ensure it's visible
    DOM.pageViews.forEach(v => v.classList.remove('active'));
    firstPage.classList.add('active');
    AppState.currentPage = 'page-accueil';
    updateNavIndicator('accueil');
  }

  // Resize handler for nav indicator
  window.addEventListener('resize', onResize, { passive: true });

  // Handle browser back/forward (basic hash-based routing)
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '');
    navigateTo(hash && document.getElementById('page-' + hash) ? hash : 'accueil');
  });

  // Initial scroll check
  onScroll();

  // Ouverture directe d'une page via l'URL (ex. index.html#legal, #contact)
  const initialHash = (location.hash || '').replace('#', '');
  if (initialHash && initialHash !== 'accueil' && document.getElementById('page-' + initialHash)) {
    navigateTo(initialHash);
  }

  console.log('%cCAMI Détective Privé', 'color:#429bf5;font-family:serif;font-size:1.2rem;font-weight:bold');
  console.log('%cCabinet MIGLIACCIO Investigations — Détective Privé — Aix-en-Provence', 'color:#94a9c9;font-size:0.9rem');
}

/* ========================================================================
   ENTRY POINT
   ======================================================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
