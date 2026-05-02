import React, { useState, useRef, useEffect, useCallback } from "react";

const WORLD_DATA = {
  "India": {
    states: {
      "Andhra Pradesh": ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Tirupati","Rajahmundry","Kakinada"],
      "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Tawang","Ziro"],
      "Assam": ["Guwahati","Silchar","Dibrugarh","Jorhat","Nagaon","Tinsukia","Tezpur"],
      "Bihar": ["Patna","Gaya","Muzaffarpur","Bhagalpur","Darbhanga","Purnia","Arrah","Begusarai"],
      "Chhattisgarh": ["Raipur","Bhilai","Bilaspur","Korba","Durg","Rajnandgaon","Jagdalpur"],
      "Goa": ["Panaji","Margao","Vasco da Gama","Mapusa","Ponda"],
      "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Junagadh"],
      "Haryana": ["Faridabad","Gurgaon","Panipat","Ambala","Yamunanagar","Rohtak","Hisar","Karnal"],
      "Himachal Pradesh": ["Shimla","Mandi","Solan","Dharamshala","Kullu","Manali","Bilaspur"],
      "Jharkhand": ["Ranchi","Jamshedpur","Dhanbad","Bokaro","Deoghar","Hazaribagh"],
      "Karnataka": ["Bangalore","Mysore","Hubli","Mangalore","Belgaum","Davangere","Bellary","Shimoga"],
      "Kerala": ["Thiruvananthapuram","Kochi","Kozhikode","Thrissur","Kollam","Palakkad","Alappuzha","Kannur"],
      "Madhya Pradesh": ["Bhopal","Indore","Gwalior","Jabalpur","Ujjain","Sagar","Dewas","Satna"],
      "Maharashtra": ["Mumbai","Pune","Nagpur","Nashik","Aurangabad","Solapur","Amravati","Navi Mumbai","Thane"],
      "Manipur": ["Imphal","Thoubal","Bishnupur","Churachandpur"],
      "Meghalaya": ["Shillong","Tura","Jowai","Nongpoh"],
      "Mizoram": ["Aizawl","Lunglei","Champhai","Kolasib"],
      "Nagaland": ["Kohima","Dimapur","Mokokchung","Tuensang"],
      "Odisha": ["Bhubaneswar","Cuttack","Rourkela","Berhampur","Sambalpur","Puri","Balasore"],
      "Punjab": ["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Mohali","Hoshiarpur","Gurdaspur"],
      "Rajasthan": ["Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur","Pushkar"],
      "Sikkim": ["Gangtok","Namchi","Pelling","Ravangla"],
      "Tamil Nadu": ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Ooty"],
      "Telangana": ["Hyderabad","Warangal","Nizamabad","Karimnagar","Ramagundam","Khammam","Mahbubnagar"],
      "Tripura": ["Agartala","Udaipur","Dharmanagar","Kailasahar"],
      "Uttar Pradesh": ["Lucknow","Kanpur","Agra","Varanasi","Meerut","Allahabad","Bareilly","Aligarh","Moradabad"],
      "Uttarakhand": ["Dehradun","Haridwar","Roorkee","Haldwani","Rudrapur","Rishikesh","Mussoorie","Nainital"],
      "West Bengal": ["Kolkata","Howrah","Durgapur","Asansol","Siliguri","Darjeeling","Burdwan","Malda"],
      "Delhi": ["New Delhi","Central Delhi","East Delhi","North Delhi","South Delhi","West Delhi","Dwarka","Rohini"],
      "Jammu and Kashmir": ["Srinagar","Jammu","Anantnag","Sopore","Baramulla","Udhampur"],
      "Ladakh": ["Leh","Kargil","Nubra","Zanskar"],
      "Puducherry": ["Puducherry","Karaikal","Mahe","Yanam"],
      "Chandigarh": ["Chandigarh"],
      "Andaman and Nicobar Islands": ["Port Blair","Car Nicobar","Diglipur"],
    }
  },
  "United States": {
    states: {
      "California": ["Los Angeles","San Francisco","San Diego","San Jose","Sacramento","Fresno","Long Beach","Oakland","Anaheim"],
      "New York": ["New York City","Buffalo","Rochester","Yonkers","Syracuse","Albany","Schenectady","Utica"],
      "Texas": ["Houston","San Antonio","Dallas","Austin","Fort Worth","El Paso","Arlington","Corpus Christi","Plano"],
      "Florida": ["Jacksonville","Miami","Tampa","Orlando","St. Petersburg","Hialeah","Tallahassee","Fort Lauderdale"],
      "Illinois": ["Chicago","Aurora","Rockford","Joliet","Naperville","Springfield","Peoria","Elgin"],
      "Pennsylvania": ["Philadelphia","Pittsburgh","Allentown","Erie","Reading","Scranton","Bethlehem","Lancaster"],
      "Ohio": ["Columbus","Cleveland","Cincinnati","Toledo","Akron","Dayton","Parma","Canton"],
      "Georgia": ["Atlanta","Augusta","Columbus","Macon","Savannah","Athens","Sandy Springs"],
      "North Carolina": ["Charlotte","Raleigh","Greensboro","Durham","Winston-Salem","Fayetteville","Cary"],
      "Michigan": ["Detroit","Grand Rapids","Warren","Sterling Heights","Ann Arbor","Lansing","Flint"],
      "Washington": ["Seattle","Spokane","Tacoma","Vancouver","Bellevue","Kirkland","Kennewick","Renton"],
      "Arizona": ["Phoenix","Tucson","Mesa","Chandler","Scottsdale","Glendale","Gilbert","Tempe"],
      "Nevada": ["Las Vegas","Henderson","Reno","North Las Vegas","Sparks","Carson City"],
      "Colorado": ["Denver","Colorado Springs","Aurora","Fort Collins","Lakewood","Thornton","Arvada"],
      "Massachusetts": ["Boston","Worcester","Springfield","Lowell","Cambridge","New Bedford","Brockton"],
      "Hawaii": ["Honolulu","Hilo","Kailua","Pearl City","Waipahu","Kaneohe"],
      "Alaska": ["Anchorage","Fairbanks","Juneau","Sitka","Ketchikan","Wasilla"],
    }
  },
  "United Kingdom": {
    states: {
      "England": ["London","Birmingham","Manchester","Leeds","Sheffield","Bradford","Liverpool","Bristol","Coventry","Leicester","Nottingham","Newcastle"],
      "Scotland": ["Edinburgh","Glasgow","Aberdeen","Dundee","Inverness","Stirling","Perth","Paisley"],
      "Wales": ["Cardiff","Swansea","Newport","Wrexham","Barry","Neath"],
      "Northern Ireland": ["Belfast","Derry","Lisburn","Newry","Armagh","Ballymena"],
    }
  },
  "Australia": {
    states: {
      "New South Wales": ["Sydney","Newcastle","Wollongong","Maitland","Central Coast","Wagga Wagga","Albury"],
      "Victoria": ["Melbourne","Geelong","Ballarat","Bendigo","Shepparton","Mildura","Wodonga"],
      "Queensland": ["Brisbane","Gold Coast","Sunshine Coast","Townsville","Cairns","Toowoomba","Rockhampton"],
      "Western Australia": ["Perth","Fremantle","Bunbury","Geraldton","Kalgoorlie","Albany"],
      "South Australia": ["Adelaide","Mount Gambier","Whyalla","Murray Bridge","Port Augusta"],
      "Tasmania": ["Hobart","Launceston","Devonport","Burnie"],
      "Australian Capital Territory": ["Canberra","Belconnen","Tuggeranong","Woden","Gungahlin"],
      "Northern Territory": ["Darwin","Alice Springs","Palmerston","Katherine"],
    }
  },
  "Canada": {
    states: {
      "Ontario": ["Toronto","Ottawa","Mississauga","Brampton","Hamilton","London","Markham","Vaughan","Kitchener","Windsor"],
      "Quebec": ["Montreal","Quebec City","Laval","Gatineau","Longueuil","Sherbrooke","Saguenay","Lévis"],
      "British Columbia": ["Vancouver","Victoria","Surrey","Burnaby","Richmond","Kelowna","Abbotsford","Coquitlam"],
      "Alberta": ["Calgary","Edmonton","Red Deer","Lethbridge","St. Albert","Medicine Hat","Grande Prairie"],
      "Manitoba": ["Winnipeg","Brandon","Steinbach","Thompson","Portage la Prairie"],
      "Saskatchewan": ["Saskatoon","Regina","Prince Albert","Moose Jaw","Lloydminster"],
      "Nova Scotia": ["Halifax","Cape Breton","Truro","Dartmouth","Sydney"],
      "New Brunswick": ["Moncton","Saint John","Fredericton","Miramichi","Edmundston"],
    }
  },
  "Germany": {
    states: {
      "Bavaria": ["Munich","Nuremberg","Augsburg","Regensburg","Ingolstadt","Würzburg","Fürth"],
      "North Rhine-Westphalia": ["Cologne","Düsseldorf","Dortmund","Essen","Duisburg","Bochum","Wuppertal","Bielefeld"],
      "Baden-Württemberg": ["Stuttgart","Mannheim","Karlsruhe","Freiburg","Heidelberg","Heilbronn","Ulm"],
      "Berlin": ["Berlin"],
      "Hamburg": ["Hamburg"],
      "Hesse": ["Frankfurt","Wiesbaden","Kassel","Darmstadt","Offenbach","Hanau"],
      "Lower Saxony": ["Hanover","Braunschweig","Oldenburg","Osnabrück","Wolfsburg","Göttingen"],
    }
  },
  "France": {
    states: {
      "Île-de-France": ["Paris","Boulogne-Billancourt","Saint-Denis","Argenteuil","Montreuil","Créteil","Nanterre"],
      "Provence-Alpes-Côte d'Azur": ["Marseille","Nice","Toulon","Aix-en-Provence","Avignon","Cannes","Antibes"],
      "Auvergne-Rhône-Alpes": ["Lyon","Grenoble","Saint-Étienne","Clermont-Ferrand","Valence","Annecy"],
      "Nouvelle-Aquitaine": ["Bordeaux","Limoges","Pau","Bayonne","Poitiers","La Rochelle"],
      "Occitanie": ["Toulouse","Montpellier","Nîmes","Perpignan","Béziers","Narbonne"],
      "Normandy": ["Rouen","Caen","Le Havre","Cherbourg","Évreux"],
    }
  },
  "Japan": {
    states: {
      "Tokyo": ["Shinjuku","Shibuya","Roppongi","Akihabara","Asakusa","Ginza","Ueno","Ikebukuro"],
      "Osaka": ["Osaka City","Sakai","Higashiosaka","Hirakata","Toyonaka","Suita"],
      "Kyoto": ["Kyoto City","Uji","Maizuru","Kameoka"],
      "Hokkaido": ["Sapporo","Hakodate","Asahikawa","Obihiro","Kushiro"],
      "Aichi": ["Nagoya","Toyota","Okazaki","Ichinomiya","Toyohashi"],
      "Kanagawa": ["Yokohama","Kawasaki","Sagamihara","Fujisawa","Yokosuka"],
      "Fukuoka": ["Fukuoka City","Kitakyushu","Kurume","Omuta"],
    }
  },
  "China": {
    states: {
      "Beijing": ["Beijing City","Chaoyang","Haidian","Dongcheng","Xicheng","Fengtai"],
      "Shanghai": ["Huangpu","Xuhui","Changning","Jing'an","Putuo","Pudong","Minhang"],
      "Guangdong": ["Guangzhou","Shenzhen","Dongguan","Foshan","Zhongshan","Huizhou","Zhuhai"],
      "Zhejiang": ["Hangzhou","Ningbo","Wenzhou","Shaoxing","Jinhua","Jiaxing"],
      "Jiangsu": ["Nanjing","Suzhou","Wuxi","Xuzhou","Changzhou","Nantong"],
      "Sichuan": ["Chengdu","Mianyang","Nanchong","Leshan","Luzhou"],
    }
  },
  "United Arab Emirates": {
    states: {
      "Dubai": ["Dubai City","Deira","Bur Dubai","Jumeirah","Marina","Downtown Dubai","Business Bay","JLT","Palm Jumeirah"],
      "Abu Dhabi": ["Abu Dhabi City","Al Ain","Khalifa City","Mohammed Bin Zayed City","Yas Island"],
      "Sharjah": ["Sharjah City","Khorfakkan","Kalba"],
      "Ajman": ["Ajman City"],
      "Ras Al Khaimah": ["Ras Al Khaimah City","Al Nakheel","Al Hamra Village"],
      "Fujairah": ["Fujairah City","Dibba Al Fujairah"],
    }
  },
  "Singapore": { states: { "Singapore": ["Singapore City","Orchard","Marina Bay","Sentosa","Jurong","Woodlands","Tampines","Changi","Clementi","Ang Mo Kio"] } },
  "Pakistan": {
    states: {
      "Punjab": ["Lahore","Faisalabad","Rawalpindi","Gujranwala","Multan","Sialkot","Bahawalpur","Sargodha"],
      "Sindh": ["Karachi","Hyderabad","Sukkur","Larkana","Nawabshah","Mirpur Khas"],
      "Khyber Pakhtunkhwa": ["Peshawar","Abbottabad","Mansehra","Kohat","Mardan","Mingora"],
      "Balochistan": ["Quetta","Turbat","Khuzdar","Hub","Chaman","Gwadar"],
      "Islamabad": ["Islamabad"],
    }
  },
  "Bangladesh": {
    states: {
      "Dhaka": ["Dhaka City","Narayanganj","Gazipur","Manikganj"],
      "Chittagong": ["Chittagong City","Cox's Bazar","Comilla","Brahmanbaria"],
      "Rajshahi": ["Rajshahi City","Bogra","Pabna","Sirajganj"],
      "Sylhet": ["Sylhet City","Moulvibazar","Habiganj"],
      "Khulna": ["Khulna City","Jessore","Satkhira"],
    }
  },
  "Nepal": {
    states: {
      "Bagmati": ["Kathmandu","Lalitpur","Bhaktapur","Hetauda","Bharatpur"],
      "Gandaki": ["Pokhara","Baglung","Gorkha","Lamjung"],
      "Lumbini": ["Butwal","Bhairahawa","Tansen","Tulsipur"],
      "Madhesh": ["Birgunj","Janakpur","Rajbiraj","Jaleshwar"],
    }
  },
  "Thailand": {
    states: {
      "Bangkok": ["Bangkok City","Nonthaburi","Samut Prakan","Pathum Thani"],
      "Chiang Mai": ["Chiang Mai City","Chiang Rai","Lamphun","Lampang"],
      "Phuket": ["Phuket City","Patong","Kata","Karon","Rawai"],
      "Pattaya": ["Pattaya City","Jomtien","Bang Lamung"],
      "Krabi": ["Krabi City","Ao Nang","Koh Lanta"],
    }
  },
  "Malaysia": {
    states: {
      "Kuala Lumpur": ["Kuala Lumpur City","Petaling Jaya","Subang Jaya","Shah Alam","Ampang"],
      "Selangor": ["Shah Alam","Petaling Jaya","Klang","Sepang"],
      "Penang": ["George Town","Butterworth","Bukit Mertajam","Bayan Lepas"],
      "Johor": ["Johor Bahru","Kulai","Batu Pahat","Muar"],
      "Sabah": ["Kota Kinabalu","Sandakan","Tawau","Keningau"],
      "Sarawak": ["Kuching","Miri","Sibu","Bintulu"],
    }
  },
  "Indonesia": {
    states: {
      "Java": ["Jakarta","Surabaya","Bandung","Bekasi","Semarang","Tangerang","Yogyakarta","Malang","Bogor"],
      "Bali": ["Denpasar","Ubud","Kuta","Seminyak","Sanur","Nusa Dua","Jimbaran"],
      "Sumatra": ["Medan","Palembang","Pekanbaru","Padang","Batam","Bandar Lampung"],
      "Kalimantan": ["Samarinda","Balikpapan","Banjarmasin","Pontianak"],
      "Sulawesi": ["Makassar","Manado","Palu","Kendari"],
    }
  },
  "Brazil": {
    states: {
      "São Paulo": ["São Paulo","Campinas","Guarulhos","São Bernardo do Campo","Santo André"],
      "Rio de Janeiro": ["Rio de Janeiro","Niterói","Nova Iguaçu","Duque de Caxias"],
      "Minas Gerais": ["Belo Horizonte","Uberlândia","Contagem","Juiz de Fora"],
      "Bahia": ["Salvador","Feira de Santana","Vitória da Conquista","Camaçari"],
      "Paraná": ["Curitiba","Londrina","Maringá","Ponta Grossa"],
    }
  },
  "South Africa": {
    states: {
      "Gauteng": ["Johannesburg","Pretoria","Soweto","Ekurhuleni","Sandton"],
      "Western Cape": ["Cape Town","Stellenbosch","George","Paarl","Knysna"],
      "KwaZulu-Natal": ["Durban","Pietermaritzburg","Richards Bay","Port Shepstone"],
      "Eastern Cape": ["Port Elizabeth","East London","Mthatha","Uitenhage"],
    }
  },
  "Nigeria": {
    states: {
      "Lagos": ["Lagos City","Ikeja","Apapa","Victoria Island","Lekki","Surulere"],
      "Abuja FCT": ["Abuja","Garki","Wuse","Gwarinpa"],
      "Kano": ["Kano City","Wudil","Gwarzo"],
      "Rivers": ["Port Harcourt","Obio-Akpor","Okrika"],
    }
  },
  "Kenya": {
    states: {
      "Nairobi": ["Nairobi City","Westlands","Karen","Langata","Embakasi"],
      "Mombasa": ["Mombasa City","Likoni","Nyali","Bamburi"],
      "Kisumu": ["Kisumu City","Mamboleo","Kondele"],
    }
  },
  "Egypt": {
    states: {
      "Cairo": ["Cairo City","Heliopolis","Maadi","Nasr City","Zamalek","New Cairo"],
      "Alexandria": ["Alexandria City","Sidi Gaber","Montazah","Agami"],
      "Giza": ["Giza City","Haram","Imbaba","Dokki"],
      "Luxor": ["Luxor City","Karnak","New Qurna"],
      "Aswan": ["Aswan City","Kom Ombo","Idfu"],
    }
  },
  "Saudi Arabia": {
    states: {
      "Riyadh": ["Riyadh City","Al Diriyah","Al Kharj","Dawadmi"],
      "Makkah": ["Mecca","Jeddah","Taif","Rabigh"],
      "Madinah": ["Medina","Yanbu","Badr","Al Ula"],
      "Eastern Province": ["Dammam","Al Khobar","Dhahran","Al Ahsa","Qatif","Jubail"],
    }
  },
  "Turkey": {
    states: {
      "Istanbul": ["Istanbul City","Kadıköy","Beşiktaş","Fatih","Üsküdar","Beyoğlu"],
      "Ankara": ["Ankara City","Çankaya","Keçiören","Mamak"],
      "Izmir": ["Izmir City","Konak","Karşıyaka","Bornova"],
      "Antalya": ["Antalya City","Alanya","Manavgat","Kemer","Side"],
    }
  },
  "Italy": {
    states: {
      "Lombardy": ["Milan","Bergamo","Brescia","Como","Cremona","Mantua","Monza","Pavia"],
      "Lazio": ["Rome","Frosinone","Latina","Rieti","Viterbo"],
      "Veneto": ["Venice","Verona","Padua","Vicenza","Treviso"],
      "Tuscany": ["Florence","Siena","Pisa","Lucca","Livorno"],
      "Sicily": ["Palermo","Catania","Messina","Syracuse","Agrigento"],
    }
  },
  "Spain": {
    states: {
      "Madrid": ["Madrid City","Móstoles","Alcalá de Henares","Fuenlabrada","Leganés","Getafe"],
      "Catalonia": ["Barcelona","Hospitalet de Llobregat","Badalona","Terrassa","Sabadell","Lleida"],
      "Andalusia": ["Seville","Málaga","Córdoba","Granada","Almería","Cádiz","Marbella"],
      "Balearic Islands": ["Palma","Ibiza City","Mahón","Manacor"],
      "Canary Islands": ["Las Palmas","Santa Cruz de Tenerife","Arona"],
    }
  },
  "Russia": {
    states: {
      "Moscow": ["Moscow City","Korolev","Khimki","Mytishchi","Podolsk"],
      "Saint Petersburg": ["Saint Petersburg City","Kolpino","Pushkin","Peterhof"],
      "Novosibirsk": ["Novosibirsk City","Berdsk","Ob"],
      "Yekaterinburg": ["Yekaterinburg City","Pervouralsk","Nizhny Tagil"],
      "Sochi": ["Sochi City","Adler","Khosta"],
    }
  },
  "Vietnam": {
    states: {
      "Hanoi": ["Hanoi City","Ha Long","Hai Phong","Nam Dinh","Thai Nguyen"],
      "Ho Chi Minh City": ["Ho Chi Minh City","Bien Hoa","Thu Dau Mot","Vung Tau"],
      "Da Nang": ["Da Nang City","Hoi An","Tam Ky"],
    }
  },
  "Philippines": {
    states: {
      "Metro Manila": ["Manila","Quezon City","Caloocan","Makati","Pasig","Taguig","Marikina","Parañaque","Valenzuela"],
      "Cebu": ["Cebu City","Lapu-Lapu","Mandaue","Talisay"],
      "Davao": ["Davao City","Digos","Tagum","Panabo"],
    }
  },
  "South Korea": {
    states: {
      "Seoul": ["Seoul City","Incheon","Suwon","Seongnam","Bucheon","Goyang","Yongin"],
      "Busan": ["Busan City","Ulsan","Changwon","Gimhae"],
      "Jeju": ["Jeju City","Seogwipo","Aewol"],
    }
  },
  "Mexico": {
    states: {
      "Mexico City": ["Mexico City","Ecatepec","Nezahualcóyotl","Iztapalapa"],
      "Jalisco": ["Guadalajara","Zapopan","Tlaquepaque","Puerto Vallarta"],
      "Nuevo León": ["Monterrey","Guadalupe","San Nicolás","Apodaca"],
      "Quintana Roo": ["Cancún","Playa del Carmen","Tulum","Cozumel"],
    }
  },
  "Argentina": {
    states: {
      "Buenos Aires": ["Buenos Aires City","La Plata","Mar del Plata","Quilmes"],
      "Córdoba": ["Córdoba City","Villa Carlos Paz","Río Cuarto"],
      "Santa Fe": ["Rosario","Santa Fe City","Rafaela"],
    }
  },
  "Greece": {
    states: {
      "Attica": ["Athens","Piraeus","Peristeri","Kallithea"],
      "Central Macedonia": ["Thessaloniki","Kavala","Katerini"],
      "Crete": ["Heraklion","Chania","Rethymno","Agios Nikolaos"],
    }
  },
  "Netherlands": {
    states: {
      "North Holland": ["Amsterdam","Haarlem","Zaandam","Purmerend"],
      "South Holland": ["Rotterdam","The Hague","Leiden","Delft","Dordrecht"],
      "Utrecht": ["Utrecht City","Amersfoort","Nieuwegein"],
    }
  },
  "Poland": {
    states: {
      "Masovian": ["Warsaw","Radom","Płock","Siedlce"],
      "Silesian": ["Katowice","Częstochowa","Sosnowiec","Gliwice","Zabrze"],
      "Lesser Poland": ["Krakow","Tarnów","Nowy Sącz"],
    }
  },
  "Morocco": {
    states: {
      "Casablanca-Settat": ["Casablanca","Mohammedia","Settat"],
      "Rabat-Salé-Kénitra": ["Rabat","Salé","Kénitra","Temara"],
      "Marrakesh-Safi": ["Marrakesh","Safi","Essaouira"],
      "Fès-Meknès": ["Fez","Meknes","Sefrou"],
    }
  },
  "Portugal": {
    states: {
      "Lisbon": ["Lisbon City","Amadora","Almada","Sintra","Cascais","Loures"],
      "Porto": ["Porto City","Gaia","Braga","Matosinhos","Gondomar"],
      "Algarve": ["Faro","Portimão","Albufeira","Tavira","Lagos"],
    }
  },
  "Sweden": {
    states: {
      "Stockholm": ["Stockholm City","Södertälje","Solna","Sundbyberg"],
      "Västra Götaland": ["Gothenburg","Mölndal","Borås","Trollhättan"],
      "Skåne": ["Malmö","Helsingborg","Kristianstad","Lund"],
    }
  },
  "Switzerland": {
    states: {
      "Zurich": ["Zurich City","Winterthur","Uster","Dübendorf"],
      "Geneva": ["Geneva City","Carouge","Lancy","Vernier"],
      "Bern": ["Bern City","Biel/Bienne","Thun"],
    }
  },
  "New Zealand": {
    states: {
      "Auckland": ["Auckland City","North Shore","Waitakere","Manukau","Hamilton"],
      "Wellington": ["Wellington City","Lower Hutt","Upper Hutt","Porirua"],
      "Canterbury": ["Christchurch","Timaru"],
      "Otago": ["Dunedin","Queenstown","Wanaka"],
    }
  },
  "Norway": { states: { "Oslo": ["Oslo City","Drammen","Bærum","Asker"], "Bergen": ["Bergen City","Voss","Stord"], "Trondheim": ["Trondheim City","Stjørdal"] } },
  "Denmark": { states: { "Capital Region": ["Copenhagen","Frederiksberg","Gentofte"], "Central Denmark": ["Aarhus","Viborg","Herning"], "Southern Denmark": ["Odense","Esbjerg","Kolding"] } },
  "Belgium": { states: { "Brussels": ["Brussels City","Liège","Antwerp","Ghent","Bruges","Namur","Leuven"] } },
  "Ireland": { states: { "Leinster": ["Dublin","Drogheda","Navan","Mullingar"], "Munster": ["Cork","Limerick","Waterford","Killarney"], "Connacht": ["Galway","Sligo","Castlebar"] } },
  "Israel": { states: { "Tel Aviv": ["Tel Aviv","Ramat Gan","Petah Tikva","Rishon LeZion"], "Jerusalem": ["Jerusalem City","Bethlehem"], "Haifa": ["Haifa City","Acre","Nazareth"] } },
  "Jordan": { states: { "Amman": ["Amman City","Zarqa","Irbid","Aqaba","Petra"] } },
  "Qatar": { states: { "Doha": ["Doha City","Al Wakrah","Al Khor","Al Rayyan","Umm Salal"] } },
  "Iran": { states: { "Tehran": ["Tehran City","Karaj","Qom","Isfahan","Shiraz","Tabriz","Mashhad","Ahvaz"] } },
  "Iraq": { states: { "Baghdad": ["Baghdad City"], "Basra": ["Basra City"], "Erbil": ["Erbil City","Duhok","Sulaymaniyah"] } },
  "Romania": { states: { "Bucharest": ["Bucharest City","Cluj-Napoca","Timișoara","Iași","Constanța","Craiova"] } },
  "Hungary": { states: { "Budapest": ["Budapest City","Debrecen","Miskolc","Pécs","Győr","Nyíregyháza"] } },
  "Czech Republic": { states: { "Prague": ["Prague City","Brno","Ostrava","Plzeň","Liberec","Olomouc"] } },
  "Colombia": { states: { "Bogotá": ["Bogotá City"], "Antioquia": ["Medellín","Bello","Itagüí"], "Valle del Cauca": ["Cali","Palmira"] } },
  "Chile": { states: { "Santiago": ["Santiago City","Puente Alto","Maipú","La Florida"], "Valparaíso": ["Valparaíso City","Viña del Mar"] } },
  "Ethiopia": { states: { "Addis Ababa": ["Addis Ababa City"], "Oromia": ["Adama","Dire Dawa","Jimma"], "Amhara": ["Bahir Dar","Gondar","Dessie"] } },
  "Ghana": { states: { "Greater Accra": ["Accra","Tema","Madina"], "Ashanti": ["Kumasi","Obuasi"], "Western": ["Takoradi","Tarkwa"] } },
  "Croatia": { states: { "Zagreb County": ["Zagreb City"], "Split-Dalmatia": ["Split","Dubrovnik","Zadar","Hvar"] } },
  "Cambodia": { states: { "Phnom Penh": ["Phnom Penh City"], "Siem Reap": ["Siem Reap City","Angkor Wat"], "Sihanoukville": ["Sihanoukville City"] } },
  "Myanmar": { states: { "Yangon": ["Yangon City"], "Mandalay": ["Mandalay City","Pyin Oo Lwin"], "Bagan": ["Bagan City"] } },
  "Sri Lanka": {
    states: {
      "Western Province": ["Colombo","Negombo","Kalutara","Panadura"],
      "Central Province": ["Kandy","Matale","Nuwara Eliya"],
      "Southern Province": ["Galle","Matara","Hambantota","Tangalle"],
      "Northern Province": ["Jaffna","Kilinochchi","Mannar"],
      "Eastern Province": ["Batticaloa","Trincomalee","Ampara"],
    }
  },
};

const ALL_COUNTRIES = Object.keys(WORLD_DATA).sort();

const PROPERTY_TYPES_FREQUENT = [
  { label: "Hotel", icon: "🏨" },
  { label: "Apartment", icon: "🏢" },
  { label: "Homestay", icon: "🏠" },
];
const PROPERTY_TYPES_OTHER = [
  { label: "Villa", icon: "🏡" },
  { label: "Vacation home", icon: "🌴" },
  { label: "Guest house", icon: "🏘️" },
  { label: "Inn", icon: "🏪" },
  { label: "Bed and breakfast", icon: "☕" },
  { label: "Motel", icon: "🛏️" },
  { label: "Serviced apartment", icon: "🏗️" },
  { label: "Resort", icon: "🏖️" },
  { label: "Campsite", icon: "⛺" },
  { label: "Country house", icon: "🌾" },
  { label: "Farm stay", icon: "🚜" },
  { label: "Lodge", icon: "🏔️" },
  { label: "Chalet", icon: "🏔️" },
  { label: "Holiday park", icon: "🎡" },
  { label: "Cruise", icon: "🚢" },
  { label: "Boat", icon: "⛵" },
  { label: "Unique Stays", icon: "✨" },
];

const STEPS = ["account","listingType","country","propertyType","propertyName","address","addressDetails","mapPin","contact","overview","photos","contract"];
const STAR_RATINGS = ["1 star","2 star","3 star","4 star","5 star","Unrated"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ── Validation Rules per Step ──────────────────────────────
function validateStep(stepName, form, tab) {
  const errors = {};
  switch (stepName) {
    case "account":
      if (tab === "email") {
        if (!form.email.trim()) errors.email = "Email address required hai.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Valid email enter karein.";
        if (!form.verificationCode.trim()) errors.verificationCode = "Verification code required hai.";
      } else {
        if (!form.phone.trim()) errors.phone = "Phone number required hai.";
        else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g,""))) errors.phone = "Valid phone number enter karein.";
      }
      break;
    case "listingType":
      if (!form.listingType) errors.listingType = "Ek option select karein.";
      break;
    case "country":
      if (!form.country) errors.country = "Country select karein.";
      break;
    case "propertyType":
      if (!form.propertyType) errors.propertyType = "Property type select karein.";
      break;
    case "propertyName":
      if (!form.nameEnglish.trim()) errors.nameEnglish = "Property ka English naam required hai.";
      break;
    case "address":
      if (!form.addressSearch.trim()) errors.addressSearch = "Address search karein aur select karein.";
      break;
    case "addressDetails":
      if (!form.state.trim()) errors.state = "State/Province required hai.";
      if (!form.city.trim()) errors.city = "City required hai.";
      if (!form.streetEn.trim()) errors.streetEn = "Street address required hai.";
      break;
    case "mapPin":
      // Map pin is always set (default coords), so no validation needed
      break;
    case "contact":
      if (!form.contactPhone.trim()) errors.contactPhone = "Contact number required hai.";
      if (!form.contactEmail.trim()) errors.contactEmail = "Email required hai.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) errors.contactEmail = "Valid email enter karein.";
      if (!form.reservationEmail.trim()) errors.reservationEmail = "Reservation email required hai.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.reservationEmail)) errors.reservationEmail = "Valid email enter karein.";
      break;
    case "overview":
      if (!form.starRating) errors.starRating = "Star rating select karein.";
      if (!form.renovated) errors.renovated = "Renovation status select karein.";
      if (!form.isChain) errors.isChain = "Chain status select karein.";
      if (!form.isManaged) errors.isManaged = "Management status select karein.";
      break;
    case "photos":
      if (form.exteriorPhotos.length === 0) errors.exteriorPhotos = "Kam se kam 1 exterior photo required hai.";
      if (form.interiorPhotos.length === 0) errors.interiorPhotos = "Kam se kam 1 interior photo required hai.";
      break;
    case "contract":
      if (!form.contractEmail.trim()) errors.contractEmail = "Signatory email required hai.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contractEmail)) errors.contractEmail = "Valid email enter karein.";
      if (!form.contractName.trim()) errors.contractName = "Signatory naam required hai.";
      if (!form.contractPhone.trim()) errors.contractPhone = "Signatory phone required hai.";
      break;
    default: break;
  }
  return errors;
}

// ── Leaflet Map ────────────────────────────────────────────
function LeafletMapPicker({ lat, lng, onLocationChange }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [loaded, setLoaded] = useState(!!window.L);
  const [currentAddress, setCurrentAddress] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css"; link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    if (window.L) { setLoaded(true); return; }
    if (document.getElementById("leaflet-js")) {
      document.getElementById("leaflet-js").addEventListener("load", () => setLoaded(true)); return;
    }
    const script = document.createElement("script");
    script.id = "leaflet-js";
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!loaded || !mapRef.current || mapInstanceRef.current) return;
    const L = window.L;
    const initLat = lat || 28.6139, initLng = lng || 77.2090;
    const map = L.map(mapRef.current, { center: [initLat, initLng], zoom: 14 });
    mapInstanceRef.current = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 19,
    }).addTo(map);
    const pinIcon = L.divIcon({
      className: "",
      html: `<div style="position:relative;width:36px;height:44px;"><div style="background:#1a73e8;width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,0.35);position:absolute;top:0;left:0;"></div><span style="position:absolute;top:6px;left:7px;font-size:16px;z-index:2;">🏨</span></div>`,
      iconSize: [36, 44], iconAnchor: [18, 44],
    });
    const marker = L.marker([initLat, initLng], { icon: pinIcon, draggable: true }).addTo(map);
    markerRef.current = marker;
    const reverseGeocode = (lt, ln) => {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lt}&lon=${ln}&format=json&accept-language=en`)
        .then(r => r.json()).then(d => setCurrentAddress(d.display_name || `${lt.toFixed(5)}, ${ln.toFixed(5)}`))
        .catch(() => setCurrentAddress(`${lt.toFixed(5)}, ${ln.toFixed(5)}`));
    };
    reverseGeocode(initLat, initLng);
    marker.on("dragend", () => { const p = marker.getLatLng(); onLocationChange(p.lat, p.lng); reverseGeocode(p.lat, p.lng); });
    map.on("click", (e) => { const { lat: cLat, lng: cLng } = e.latlng; marker.setLatLng([cLat, cLng]); onLocationChange(cLat, cLng); reverseGeocode(cLat, cLng); });
  }, [loaded]);

  const handleSearch = async () => {
    if (!searchVal.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchVal)}&format=json&limit=1&accept-language=en`);
      const data = await res.json();
      if (data && data[0]) {
        const sLat = parseFloat(data[0].lat), sLng = parseFloat(data[0].lon);
        mapInstanceRef.current.setView([sLat, sLng], 16);
        markerRef.current.setLatLng([sLat, sLng]);
        onLocationChange(sLat, sLng);
        setCurrentAddress(data[0].display_name);
        setSearchVal("");
      } else { alert("Location nahi mili. Koi aur naam try karein."); }
    } catch { alert("Search error. Internet check karein."); }
    setSearching(false);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12 }}>
        <input placeholder="Koi bhi jagah search karein..." value={searchVal} onChange={e => setSearchVal(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()}
          style={{ flex: 1, padding: "11px 14px", border: "1px solid #d1d5db", borderRadius: "8px 0 0 8px", fontSize: 14, outline: "none" }} />
        <button onClick={handleSearch} disabled={searching}
          style={{ padding: "11px 20px", background: searching ? "#93b4e8" : "#1a73e8", color: "#fff", border: "none", borderRadius: "0 8px 8px 0", fontSize: 14, fontWeight: 600, cursor: "pointer", minWidth: 80 }}>
          {searching ? "⏳" : "🔍 Search"}
        </button>
      </div>
      {!loaded && (
        <div style={{ height: 400, display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4fb", borderRadius: 12, border: "1px solid #e5e7eb", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 42 }}>🗺️</div>
          <div style={{ color: "#555", fontSize: 15 }}>Map load ho raha hai...</div>
        </div>
      )}
      <div ref={mapRef} style={{ width: "100%", height: 420, borderRadius: 12, border: "1px solid #e5e7eb", display: loaded ? "block" : "none", zIndex: 1 }} />
      {currentAddress && (
        <div style={{ marginTop: 12, padding: "12px 16px", background: "#e8f0fe", borderRadius: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>📍</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#1a73e8", marginBottom: 3 }}>SELECTED LOCATION</div>
            <div style={{ fontSize: 13, color: "#333", lineHeight: 1.4 }}>{currentAddress}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Error Message Component ────────────────────────────────
function ErrorMsg({ msg }) {
  if (!msg) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, padding: "7px 12px", background: "#fff0f0", border: "1px solid #fca5a5", borderRadius: 6, fontSize: 13, color: "#b91c1c", fontWeight: 500 }}>
      <span>⚠️</span> {msg}
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function PropertyRegistration() {
  const [step, setStep] = useState(0);
  const [tab, setTab] = useState("email");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({
    email: "", verificationCode: "", phone: "",
    listingType: "", country: "India", propertyType: "",
    nameEnglish: "", nameLocal: "",
    addressSearch: "", addressSelected: "",
    state: "", city: "",
    streetEn: "", streetLocal: "",
    latitude: 28.6139, longitude: 77.2090,
    contactPhone: "", contactEmail: "", reservationEmail: "",
    starRating: "", openingMonth: "", renovated: "", isChain: "", isManaged: "",
    exteriorPhotos: [], interiorPhotos: [],
    contractEmail: "", contractName: "", contractPhone: "",
  });

  const [addressDropdown, setAddressDropdown] = useState(false);
  const [addrSuggestions, setAddrSuggestions] = useState([]);
  const [addrLoading, setAddrLoading] = useState(false);
  const exteriorRef = useRef();
  const interiorRef = useRef();
  const addrTimer = useRef();

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const currentStep = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  const countryData = WORLD_DATA[form.country] || {};
  const stateList = Object.keys(countryData.states || {}).sort();
  const cityList = (countryData.states && form.state && countryData.states[form.state]) ? countryData.states[form.state] : [];

  const handleLocationChange = useCallback((lat, lng) => {
    update("latitude", lat);
    update("longitude", lng);
  }, []);

  const handleNext = () => {
    setTouched(true);
    const errs = validateStep(currentStep, form, tab);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setErrors({});
      setTouched(false);
      setStep(s => Math.min(s + 1, STEPS.length - 1));
    } else {
      // Scroll to top of card to show errors
      document.querySelector(".lp-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const back = () => { setErrors({}); setTouched(false); setStep(s => Math.max(s - 1, 0)); };

  const handleAddressInput = (val) => {
    update("addressSearch", val);
    clearTimeout(addrTimer.current);
    if (val.length < 3) { setAddressDropdown(false); return; }
    setAddrLoading(true);
    addrTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val)}&format=json&limit=6&accept-language=en`);
        const data = await res.json();
        setAddrSuggestions(data.map(d => d.display_name));
        setAddressDropdown(data.length > 0);
      } catch { setAddressDropdown(false); }
      setAddrLoading(false);
    }, 500);
  };

  const handleSubmit = () => {
    setTouched(true);
    const errs = validateStep(currentStep, form, tab);
    setErrors(errs);
    if (Object.keys(errs).length === 0) alert("🎉 Property Successfully Register Ho Gayi!\n\nBirdMyTrip team aapko jald contact karegi.");
  };

  // Show error count banner
  const errorCount = Object.keys(errors).length;

  const renderStep = () => {
    switch (currentStep) {

      case "account": return (
        <div className="lp-content">
          <h1 className="lp-title">Join us to easily list and manage your property</h1>
          {errorCount > 0 && touched && (
            <div className="lp-error-banner">⚠️ {errorCount} field{errorCount > 1 ? "s" : ""} fill karna zaroori hai aage badhne ke liye.</div>
          )}
          <div className="lp-tab-row">
            <button className={`lp-tab ${tab === "email" ? "active" : ""}`} onClick={() => { setTab("email"); setErrors({}); }}>Email</button>
            <button className={`lp-tab ${tab === "phone" ? "active" : ""}`} onClick={() => { setTab("phone"); setErrors({}); }}>Phone</button>
          </div>
          {tab === "email" ? (<>
            <div className="lp-field">
              <label>Email address <span className="lp-required">*</span></label>
              <input type="email" placeholder="Enter an email address" value={form.email} onChange={e => update("email", e.target.value)} className={errors.email ? "lp-input-error" : ""} />
              <ErrorMsg msg={errors.email} />
            </div>
            <div className="lp-field">
              <label>Email verification code <span className="lp-required">*</span></label>
              <div className="lp-input-action">
                <input placeholder="Enter code" value={form.verificationCode} onChange={e => update("verificationCode", e.target.value)} className={errors.verificationCode ? "lp-input-error" : ""} />
                <button className="lp-inline-btn">Get Code</button>
              </div>
              <ErrorMsg msg={errors.verificationCode} />
            </div>
          </>) : (
            <div className="lp-field">
              <label>Phone number <span className="lp-required">*</span></label>
              <div className="lp-phone-row">
                <select className="lp-phone-type"><option>Mobile</option></select>
                <select className="lp-country-code"><option>🇮🇳 +91</option></select>
                <input placeholder="Enter phone number" value={form.phone} onChange={e => update("phone", e.target.value)} className={errors.phone ? "lp-input-error" : ""} />
              </div>
              <ErrorMsg msg={errors.phone} />
            </div>
          )}
          <button className="lp-primary-btn" onClick={handleNext}>Create your partner account</button>
          <button className="lp-secondary-btn" onClick={handleNext}>Already registered? Sign in</button>
        </div>
      );

      case "listingType": return (
        <div className="lp-content">
          <h1 className="lp-title">Welcome to BirdMyTrip! How would you like to list your property?</h1>
          {errors.listingType && touched && <div className="lp-error-banner">⚠️ {errors.listingType}</div>}
          {[{ icon: "🏠", label: "Create a new listing", value: "new" },
            { icon: "🔗", label: "Import property from another website", value: "import" },
            { icon: "📋", label: "Create based on an existing listing", value: "existing" }].map(opt => (
            <div key={opt.value} className={`lp-list-option ${form.listingType === opt.value ? "active" : ""}`} onClick={() => update("listingType", opt.value)}>
              <span className="lp-list-icon">{opt.icon}</span>
              <span className="lp-list-label">{opt.label}</span>
              <span className="lp-arrow">→</span>
            </div>
          ))}
        </div>
      );

      case "country": return (
        <div className="lp-content">
          <h1 className="lp-title">Where's your property located?</h1>
          <p className="lp-subtitle">Once selected, you won't be able to change your property's location.</p>
          <div className="lp-field">
            <label>Country or region <span className="lp-required">*</span> <span className="lp-badge">{ALL_COUNTRIES.length} countries</span></label>
            <select value={form.country} onChange={e => { update("country", e.target.value); update("state", ""); update("city", ""); }}>
              {ALL_COUNTRIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="lp-info-card">
            <h3>List your property on BirdMyTrip in a few simple steps</h3>
            <div className="lp-steps-grid">
              <div><strong>1. Add basic info</strong><p>Name, address, and contact info</p></div>
              <div><strong>2. Upload photos</strong><p>At least 1 interior and exterior shot</p></div>
              <div><strong>3. Sign the contract</strong><p>2 minutes to review and sign</p></div>
            </div>
          </div>
        </div>
      );

      case "propertyType": return (
        <div className="lp-content">
          <h1 className="lp-title">What kind of property are you listing?</h1>
          {errors.propertyType && touched && <div className="lp-error-banner">⚠️ {errors.propertyType}</div>}
          <p className="lp-section-label">Frequently selected</p>
          <div className="lp-type-grid lp-type-grid--3">
            {PROPERTY_TYPES_FREQUENT.map(t => (
              <div key={t.label} className={`lp-type-card ${form.propertyType === t.label ? "active" : ""}`} onClick={() => update("propertyType", t.label)}>
                <span className="lp-type-icon">{t.icon}</span><span>{t.label}</span>
              </div>
            ))}
          </div>
          <p className="lp-section-label" style={{ marginTop: 24 }}>Other property types</p>
          <div className="lp-type-grid lp-type-grid--3">
            {PROPERTY_TYPES_OTHER.map(t => (
              <div key={t.label} className={`lp-type-card ${form.propertyType === t.label ? "active" : ""}`} onClick={() => update("propertyType", t.label)}>
                <span className="lp-type-icon">{t.icon}</span><span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      );

      case "propertyName": return (
        <div className="lp-content">
          <h1 className="lp-title">What's the name of your property?</h1>
          <div className="lp-field">
            <label>Property name (English) <span className="lp-required">*</span></label>
            <input placeholder="Enter the property's English name" value={form.nameEnglish} onChange={e => update("nameEnglish", e.target.value)} className={errors.nameEnglish ? "lp-input-error" : ""} />
            <ErrorMsg msg={errors.nameEnglish} />
          </div>
          <div className="lp-field">
            <label>Property name in the local language <span className="lp-optional">(optional)</span></label>
            <input placeholder="Enter your property name in the local language" value={form.nameLocal} onChange={e => update("nameLocal", e.target.value)} />
          </div>
        </div>
      );

      case "address": return (
        <div className="lp-content">
          <h1 className="lp-title">Where's your property located?</h1>
          <div className="lp-field">
            <label>Address <span className="lp-required">*</span></label>
            <div className="lp-search-row">
              <input
                placeholder="Pata search karein... (real-time suggestions)"
                value={form.addressSearch}
                onChange={e => handleAddressInput(e.target.value)}
                className={errors.addressSearch ? "lp-input-error" : ""}
              />
              <button className="lp-search-btn">{addrLoading ? "⏳" : "Search"}</button>
            </div>
            <ErrorMsg msg={errors.addressSearch} />
            {addressDropdown && addrSuggestions.length > 0 && (
              <div className="lp-dropdown">
                <p className="lp-dropdown-hint">📍 Matching addresses ({addrSuggestions.length} results):</p>
                {addrSuggestions.map((s, i) => (
                  <div key={i} className="lp-dropdown-item" onClick={() => {
                    update("addressSelected", s);
                    update("addressSearch", s);
                    setAddressDropdown(false);
                  }}>
                    <span className="lp-pin-icon">📍</span>
                    <span style={{ fontSize: 13, lineHeight: 1.4 }}>{s}</span>
                  </div>
                ))}
                <div className="lp-dropdown-actions">
                  <button className="lp-action-chip" onClick={() => setAddressDropdown(false)}>⌨️ Enter manually</button>
                </div>
              </div>
            )}
          </div>
        </div>
      );

      case "addressDetails": return (
        <div className="lp-content">
          <h1 className="lp-title">Address details</h1>
          {errorCount > 0 && touched && <div className="lp-error-banner">⚠️ Sabhi required fields fill karein aage badhne ke liye.</div>}
          <div className="lp-field">
            <label>Country or region</label>
            <div className="lp-country-display">{form.country}</div>
          </div>
          <div className="lp-field">
            <label>State or province <span className="lp-required">*</span> {stateList.length > 0 && <span className="lp-badge">{stateList.length} states</span>}</label>
            {stateList.length > 0 ? (
              <select value={form.state} onChange={e => { update("state", e.target.value); update("city", ""); }} className={errors.state ? "lp-input-error" : ""}>
                <option value="">-- Select State/Province --</option>
                {stateList.map(s => <option key={s}>{s}</option>)}
              </select>
            ) : (
              <input placeholder="Enter state or province" value={form.state} onChange={e => update("state", e.target.value)} className={errors.state ? "lp-input-error" : ""} />
            )}
            <ErrorMsg msg={errors.state} />
          </div>
          <div className="lp-field">
            <label>City <span className="lp-required">*</span> {cityList.length > 0 && <span className="lp-badge">{cityList.length} cities</span>}</label>
            {cityList.length > 0 ? (
              <select value={form.city} onChange={e => update("city", e.target.value)} className={errors.city ? "lp-input-error" : ""}>
                <option value="">-- Select City --</option>
                {cityList.map(c => <option key={c}>{c}</option>)}
              </select>
            ) : (
              <input placeholder="Enter city name" value={form.city} onChange={e => update("city", e.target.value)} className={errors.city ? "lp-input-error" : ""} />
            )}
            <ErrorMsg msg={errors.city} />
          </div>
          <div className="lp-field">
            <label>Street address (in English) <span className="lp-required">*</span></label>
            <p className="lp-field-hint">Include the street name and number only.</p>
            <input value={form.streetEn} onChange={e => update("streetEn", e.target.value)} placeholder="Enter street address" className={errors.streetEn ? "lp-input-error" : ""} />
            <ErrorMsg msg={errors.streetEn} />
          </div>
          <div className="lp-field">
            <label>Street address in the local language <span className="lp-optional">(optional)</span></label>
            <input value={form.streetLocal} onChange={e => update("streetLocal", e.target.value)} placeholder="Local language address" />
          </div>
        </div>
      );

      case "mapPin": return (
        <div className="lp-content">
          <h1 className="lp-title">📍 Pin the location of your property</h1>
          <LeafletMapPicker lat={form.latitude} lng={form.longitude} onLocationChange={handleLocationChange} />
        </div>
      );

      case "contact": return (
        <div className="lp-content">
          <h1 className="lp-title">How can your property be reached?</h1>
          {errorCount > 0 && touched && <div className="lp-error-banner">⚠️ Sabhi required fields fill karein aage badhne ke liye.</div>}
          <div className="lp-field">
            <label>Contact number <span className="lp-required">*</span></label>
            <div className="lp-phone-row">
              <select className="lp-phone-type"><option>Mobile</option></select>
              <select className="lp-country-code"><option>🇮🇳 91</option></select>
              <input placeholder="Enter phone number" value={form.contactPhone} onChange={e => update("contactPhone", e.target.value)} className={errors.contactPhone ? "lp-input-error" : ""} />
              <button className="lp-add-btn">＋</button>
            </div>
            <ErrorMsg msg={errors.contactPhone} />
          </div>
          <div className="lp-field">
            <label>Email <span className="lp-required">*</span></label>
            <input type="email" value={form.contactEmail} onChange={e => update("contactEmail", e.target.value)} placeholder="Enter contact email" className={errors.contactEmail ? "lp-input-error" : ""} />
            <ErrorMsg msg={errors.contactEmail} />
          </div>
          <div className="lp-field">
            <label>Email for reservation management <span className="lp-required">*</span></label>
            <input type="email" placeholder="Enter booking confirmation email" value={form.reservationEmail} onChange={e => update("reservationEmail", e.target.value)} className={errors.reservationEmail ? "lp-input-error" : ""} />
            {form.contactEmail && <button className="lp-suggestion-chip" onClick={() => update("reservationEmail", form.contactEmail)}>Use: {form.contactEmail}</button>}
            <ErrorMsg msg={errors.reservationEmail} />
          </div>
        </div>
      );

      case "overview": return (
        <div className="lp-content">
          <h1 className="lp-title">Property overview</h1>
          {errorCount > 0 && touched && <div className="lp-error-banner">⚠️ Sabhi required fields fill karein aage badhne ke liye.</div>}
          <div className="lp-field">
            <label>Star rating <span className="lp-required">*</span></label>
            <select value={form.starRating} onChange={e => update("starRating", e.target.value)} className={errors.starRating ? "lp-input-error" : ""}>
              <option value="">Select star rating</option>
              {STAR_RATINGS.map(r => <option key={r}>{r}</option>)}
            </select>
            <ErrorMsg msg={errors.starRating} />
          </div>
          <div className="lp-field">
            <label>When did your property open? <span className="lp-optional">(optional)</span></label>
            <select value={form.openingMonth} onChange={e => update("openingMonth", e.target.value)}>
              <option value="">Select month</option>
              {MONTHS.map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="lp-field">
            <label>Has the property been renovated since opening? <span className="lp-required">*</span></label>
            <div className="lp-toggle-row">
              <button className={`lp-toggle-btn ${form.renovated === "yes" ? "active" : ""} ${errors.renovated ? "lp-toggle-error" : ""}`} onClick={() => update("renovated", "yes")}>Yes, it has been</button>
              <button className={`lp-toggle-btn ${form.renovated === "notsure" ? "active" : ""} ${errors.renovated ? "lp-toggle-error" : ""}`} onClick={() => update("renovated", "notsure")}>Not sure</button>
            </div>
            <ErrorMsg msg={errors.renovated} />
          </div>
          <div className="lp-field">
            <label>Is your property part of a chain? <span className="lp-required">*</span></label>
            <div className="lp-toggle-row">
              <button className={`lp-toggle-btn ${form.isChain === "yes" ? "active" : ""} ${errors.isChain ? "lp-toggle-error" : ""}`} onClick={() => update("isChain", "yes")}>Yes, it is</button>
              <button className={`lp-toggle-btn ${form.isChain === "no" ? "active" : ""} ${errors.isChain ? "lp-toggle-error" : ""}`} onClick={() => update("isChain", "no")}>No, it isn't</button>
            </div>
            <ErrorMsg msg={errors.isChain} />
          </div>
          <div className="lp-field">
            <label>Is your property under a management company? <span className="lp-required">*</span></label>
            <div className="lp-toggle-row">
              <button className={`lp-toggle-btn ${form.isManaged === "yes" ? "active" : ""} ${errors.isManaged ? "lp-toggle-error" : ""}`} onClick={() => update("isManaged", "yes")}>Yes, it is</button>
              <button className={`lp-toggle-btn ${form.isManaged === "no" ? "active" : ""} ${errors.isManaged ? "lp-toggle-error" : ""}`} onClick={() => update("isManaged", "no")}>No, it isn't</button>
            </div>
            <ErrorMsg msg={errors.isManaged} />
          </div>
        </div>
      );

      case "photos": return (
        <div className="lp-content">
          <h1 className="lp-title">Photos</h1>
          {errorCount > 0 && touched && <div className="lp-error-banner">⚠️ Dono sections mein photos upload karein.</div>}
          <div className="lp-field">
            <h3 className="lp-photo-section-title">Exterior photos <span className="lp-required">*</span></h3>
            <p className="lp-field-hint">At least one photo. JPG/PNG, min 800×600px.</p>
            <div className={`lp-upload-zone ${errors.exteriorPhotos ? "lp-upload-error" : ""}`} onClick={() => exteriorRef.current?.click()}>
              <div className="lp-upload-icon">📷</div>
              <p>Choose a photo or drag it here</p>
              <input ref={exteriorRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => update("exteriorPhotos", Array.from(e.target.files))} />
            </div>
            {form.exteriorPhotos.length > 0 && <p className="lp-file-count">✅ {form.exteriorPhotos.length} file(s) selected</p>}
            <ErrorMsg msg={errors.exteriorPhotos} />
          </div>
          <div className="lp-field">
            <h3 className="lp-photo-section-title">Interior photos <span className="lp-required">*</span></h3>
            <p className="lp-field-hint">At least 3 photos: guest room, lobby, and interior. JPG/PNG, min 800×600px.</p>
            <div className={`lp-upload-zone ${errors.interiorPhotos ? "lp-upload-error" : ""}`} onClick={() => interiorRef.current?.click()}>
              <div className="lp-upload-icon">🖼️</div>
              <p>Choose a photo or drag it here</p>
              <input ref={interiorRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => update("interiorPhotos", Array.from(e.target.files))} />
            </div>
            {form.interiorPhotos.length > 0 && <p className="lp-file-count">✅ {form.interiorPhotos.length} file(s) selected</p>}
            <ErrorMsg msg={errors.interiorPhotos} />
          </div>
        </div>
      );

      case "contract": return (
        <div className="lp-content">
          <h1 className="lp-title">Contract details</h1>
          {errorCount > 0 && touched && <div className="lp-error-banner">⚠️ Sabhi required fields fill karein submit karne ke liye.</div>}
          <div className="lp-commission-card">
            <div><strong>Commission rate</strong><p>Based on the pre-tax rate</p></div>
            <div className="lp-commission-value">15%</div>
          </div>
          <div className="lp-info-banner">ℹ️ After signing, configure tax rules in the eBooking system.</div>
          <div className="lp-field">
            <label>Contract signatory's email <span className="lp-required">*</span></label>
            <input type="email" value={form.contractEmail} onChange={e => update("contractEmail", e.target.value)} className={errors.contractEmail ? "lp-input-error" : ""} />
            {form.contactEmail && <button className="lp-suggestion-chip" onClick={() => update("contractEmail", form.contactEmail)}>Use: {form.contactEmail}</button>}
            <ErrorMsg msg={errors.contractEmail} />
          </div>
          <div className="lp-field">
            <label>Contract signatory's name <span className="lp-required">*</span></label>
            <input value={form.contractName} onChange={e => update("contractName", e.target.value)} className={errors.contractName ? "lp-input-error" : ""} />
            <ErrorMsg msg={errors.contractName} />
          </div>
          <div className="lp-field">
            <label>Contract signatory's phone <span className="lp-required">*</span></label>
            <div className="lp-phone-row">
              <select className="lp-phone-type"><option>Mobile</option></select>
              <select className="lp-country-code"><option>🇮🇳 91</option></select>
              <input placeholder="Phone number" value={form.contractPhone} onChange={e => update("contractPhone", e.target.value)} className={errors.contractPhone ? "lp-input-error" : ""} />
            </div>
            <ErrorMsg msg={errors.contractPhone} />
          </div>
        </div>
      );

      default: return null;
    }
  };

  return (
    <div className="lp-wrapper">
      <style>{CSS}</style>
      <div className="lp-topbar">
        <div className="lp-logo">BirdMy<span>Trip</span></div>
        <div className="lp-topbar-right">
          <span style={{ fontSize: 12, color: "#888", marginRight: 16, background: "#f0f0f0", padding: "3px 10px", borderRadius: 12 }}>Step {step + 1} / {STEPS.length}</span>
        </div>
      </div>
      <div className="lp-progress-bar"><div className="lp-progress-fill" style={{ width: `${progress}%` }} /></div>
      <div className="lp-main">
        <div className="lp-card">
          {renderStep()}
          <div className="lp-footer">
            <span className="lp-save-exit-link">Save and exit</span>
            <div className="lp-footer-btns">
              {step > 0 && <button className="lp-btn-back" onClick={back}>← Back</button>}
              {step < STEPS.length - 1
                ? <button className="lp-btn-next" onClick={handleNext}>Next →</button>
                : <button className="lp-btn-next" onClick={handleSubmit}>✓ Submit</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .lp-wrapper { min-height: 100vh; background: #f7f8fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a1a; }
  .lp-topbar { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 0 32px; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 200; }
  .lp-logo { font-size: 22px; font-weight: 700; color: #1a73e8; }
  .lp-logo span { color: #ff6b35; }
  .lp-topbar-right { display: flex; align-items: center; }
  .lp-save-exit { background: none; border: none; color: #1a73e8; cursor: pointer; font-size: 14px; }
  .lp-progress-bar { height: 4px; background: #e5e7eb; }
  .lp-progress-fill { height: 100%; background: linear-gradient(90deg, #1a73e8, #34a8ff); transition: width 0.4s ease; }
  .lp-main { max-width: 860px; margin: 0 auto; padding: 40px 20px 120px; }
  .lp-card { background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); overflow: hidden; }
  .lp-content { padding: 40px 48px 24px; }
  .lp-title { font-size: 26px; font-weight: 700; line-height: 1.3; margin-bottom: 20px; color: #111; }
  .lp-subtitle { font-size: 14px; color: #555; margin-bottom: 24px; line-height: 1.5; }
  .lp-section-label { font-size: 13px; font-weight: 600; color: #555; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
  .lp-optional { color: #999; font-weight: 400; font-size: 13px; }
  .lp-required { color: #e53e3e; font-weight: 700; }
  .lp-badge { background: #e8f0fe; color: #1a73e8; font-size: 11px; padding: 2px 8px; border-radius: 10px; font-weight: 600; margin-left: 6px; }

  /* Error Banner */
  .lp-error-banner { background: #fff0f0; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #b91c1c; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }

  /* Input Error State */
  .lp-input-error { border-color: #e53e3e !important; background: #fff8f8 !important; }
  .lp-input-error:focus { box-shadow: 0 0 0 3px rgba(229,62,62,0.15) !important; }
  .lp-toggle-error { border-color: #e53e3e !important; }
  .lp-upload-error { border-color: #e53e3e !important; background: #fff8f8 !important; }

  .lp-tab-row { display: flex; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 24px; width: fit-content; }
  .lp-tab { padding: 10px 32px; background: none; border: none; cursor: pointer; font-size: 14px; font-weight: 500; color: #666; }
  .lp-tab.active { background: #fff; color: #111; font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
  .lp-field { margin-bottom: 20px; }
  .lp-field label { display: block; font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #111; }
  .lp-field input, .lp-field select { width: 100%; padding: 11px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; color: #111; background: #fff; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
  .lp-field input:focus, .lp-field select:focus { border-color: #1a73e8; box-shadow: 0 0 0 3px rgba(26,115,232,0.12); }
  .lp-field-hint { font-size: 12px; color: #666; margin-top: 5px; line-height: 1.4; }
  .lp-input-action { display: flex; align-items: center; }
  .lp-input-action input { flex: 1; border-radius: 8px 0 0 8px; border-right: none; }
  .lp-inline-btn { padding: 11px 16px; background: none; border: 1px solid #d1d5db; border-left: none; border-radius: 0 8px 8px 0; color: #1a73e8; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap; }
  .lp-phone-row { display: flex; gap: 8px; align-items: center; }
  .lp-phone-type { width: 90px !important; flex-shrink: 0; }
  .lp-country-code { width: 80px !important; flex-shrink: 0; }
  .lp-phone-row input { flex: 1; }
  .lp-add-btn { width: 36px; height: 36px; border: 1px solid #d1d5db; border-radius: 50%; background: none; font-size: 20px; cursor: pointer; color: #555; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .lp-primary-btn { width: 100%; padding: 14px; background: #1a73e8; color: #fff; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; margin-bottom: 12px; transition: background 0.2s; }
  .lp-primary-btn:hover { background: #1557b0; }
  .lp-secondary-btn { width: 100%; padding: 14px; background: none; color: #111; border: 1px solid #d1d5db; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; }
  .lp-secondary-btn:hover { background: #f5f5f5; }
  .lp-list-option { display: flex; align-items: center; gap: 16px; padding: 18px 20px; border: 1px solid #e5e7eb; border-radius: 10px; margin-bottom: 12px; cursor: pointer; transition: all 0.2s; }
  .lp-list-option:hover, .lp-list-option.active { background: #e8f0fe; border-color: #1a73e8; }
  .lp-list-icon { font-size: 20px; }
  .lp-list-label { flex: 1; font-size: 15px; font-weight: 500; }
  .lp-arrow { color: #666; font-size: 18px; }
  .lp-country-display { font-size: 20px; font-weight: 700; padding: 8px 0; color: #111; }
  .lp-info-card { background: #f5f7fa; border-radius: 10px; padding: 20px; margin-top: 20px; }
  .lp-info-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 16px; }
  .lp-steps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .lp-steps-grid strong { font-size: 14px; display: block; margin-bottom: 4px; }
  .lp-steps-grid p { font-size: 13px; color: #555; line-height: 1.4; }
  .lp-type-grid { display: grid; gap: 12px; }
  .lp-type-grid--3 { grid-template-columns: repeat(3, 1fr); }
  .lp-type-card { border: 1px solid #d1d5db; border-radius: 10px; padding: 16px 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 500; transition: all 0.2s; }
  .lp-type-card:hover { background: #f0f6ff; border-color: #1a73e8; }
  .lp-type-card.active { background: #e8f0fe; border-color: #1a73e8; border-width: 2px; }
  .lp-type-icon { font-size: 22px; }
  .lp-search-row { display: flex; }
  .lp-search-row input { flex: 1; border-radius: 8px 0 0 8px; }
  .lp-search-btn { padding: 11px 20px; background: #1a73e8; color: #fff; border: none; border-radius: 0 8px 8px 0; font-size: 14px; font-weight: 600; cursor: pointer; }
  .lp-dropdown { border: 1px solid #e5e7eb; border-radius: 8px; margin-top: 4px; background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; max-height: 300px; overflow-y: auto; z-index: 50; position: relative; }
  .lp-dropdown-hint { padding: 10px 16px; font-size: 12px; color: #666; background: #f9fafb; border-bottom: 1px solid #e5e7eb; }
  .lp-dropdown-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 16px; cursor: pointer; font-size: 13px; border-bottom: 1px solid #f0f0f0; transition: background 0.15s; }
  .lp-dropdown-item:hover { background: #f0f6ff; }
  .lp-pin-icon { flex-shrink: 0; margin-top: 1px; }
  .lp-dropdown-actions { display: flex; gap: 10px; padding: 12px 16px; background: #f9fafb; }
  .lp-action-chip { padding: 8px 14px; border: 1px solid #d1d5db; border-radius: 20px; background: #fff; font-size: 12px; cursor: pointer; }
  .lp-suggestion-chip { display: inline-block; margin-top: 8px; padding: 6px 12px; background: #f0f6ff; border: 1px solid #c5d8f7; border-radius: 20px; font-size: 12px; color: #1a73e8; cursor: pointer; }
  .lp-toggle-row { display: flex; gap: 12px; }
  .lp-toggle-btn { flex: 1; padding: 14px; background: none; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
  .lp-toggle-btn:hover { border-color: #1a73e8; background: #f0f6ff; }
  .lp-toggle-btn.active { border-color: #1a73e8; background: #e8f0fe; color: #1a73e8; font-weight: 600; }
  .lp-photo-section-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .lp-upload-zone { border: 2px dashed #d1d5db; border-radius: 10px; padding: 40px 20px; text-align: center; cursor: pointer; color: #666; font-size: 14px; margin-top: 10px; transition: all 0.2s; }
  .lp-upload-zone:hover { border-color: #1a73e8; background: #f0f6ff; }
  .lp-upload-icon { font-size: 28px; margin-bottom: 10px; }
  .lp-file-count { font-size: 12px; color: #1a73e8; margin-top: 6px; font-weight: 600; }
  .lp-commission-card { background: #f0f4fb; border-radius: 10px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .lp-commission-card strong { font-size: 15px; font-weight: 700; }
  .lp-commission-card p { font-size: 12px; color: #666; margin-top: 3px; }
  .lp-commission-value { font-size: 28px; font-weight: 800; color: #1a73e8; }
  .lp-info-banner { background: #e8f4fd; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #1a5276; margin-bottom: 20px; }
  .lp-footer { display: flex; justify-content: space-between; align-items: center; padding: 20px 48px; border-top: 1px solid #f0f0f0; background: #fff; }
  .lp-save-exit-link { color: #1a73e8; font-size: 14px; cursor: pointer; }
  .lp-footer-btns { display: flex; gap: 12px; }
  .lp-btn-back { padding: 11px 28px; background: none; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; color: #333; transition: background 0.2s; }
  .lp-btn-back:hover { background: #f5f5f5; }
  .lp-btn-next { padding: 11px 32px; background: #1a73e8; color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
  .lp-btn-next:hover { background: #1557b0; }
  @media (max-width: 640px) {
    .lp-content { padding: 24px 20px 16px; }
    .lp-title { font-size: 20px; }
    .lp-type-grid--3 { grid-template-columns: repeat(2, 1fr); }
    .lp-footer { padding: 16px 20px; }
    .lp-steps-grid { grid-template-columns: 1fr; }
  }
`;