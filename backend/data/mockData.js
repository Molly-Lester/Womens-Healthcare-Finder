// Mock data for testing without a database
// Enable with: MOCK=true in .env

const mockProviders = [
    {
        provider_id: 1,
        provider_name: "Community Women's Health Service (Barts Health)",
        provider_type: "NHS Service",
        website: "https://www.bartshealth.nhs.uk/womens-health-services",
        phone_number: "020 8223 8449",
        address_line: "Sylvia Pankhurst Centre, Mile End Hospital, Bancroft Road",
        city: "London",
        postcode: "E1 4DG",
        latitude: 51.525049,
        longitude: -0.042179,
        service_name: "Women's General Health"
    },
    {
        provider_id: 2,
        provider_name: "Oxleas Women's and Girls' Health Hub",
        provider_type: "NHS Service",
        website: "https://oxleas.nhs.uk/womens-and-girls-hub/",
        phone_number: "020 8301 8920",
        address_line: "Market Street Health Centre, Woolwich",
        city: "London",
        postcode: "SE18 6QR",
        latitude: 51.489885,
        longitude: 0.063847,
        service_name: "Menopause Support"
    },
    {
        provider_id: 3,
        provider_name: "Queen Elizabeth Hospital Gynaecology Service",
        provider_type: "NHS Service",
        website: "https://www.lewishamandgreenwich.nhs.uk/gynaecology",
        phone_number: "020 8836 4897",
        address_line: "Stadium Road, Woolwich",
        city: "London",
        postcode: "SE18 4QH",
        latitude: 51.478194,
        longitude: 0.050069,
        service_name: "Fertility Support"
    },
    {
        provider_id: 4,
        provider_name: "Wolfson Fertility Centre",
        provider_type: "NHS Service",
        website: "https://www.imperial.nhs.uk/our-services/fertility-and-reproductive-medicine/ivf",
        phone_number: "020 3313 4411",
        address_line: "Hammersmith Hospital, Du Cane Road",
        city: "London",
        postcode: "W12 0HS",
        latitude: 51.517420,
        longitude: -0.234698,
        service_name: "Fertility Support"
    },
    {
        provider_id: 5,
        provider_name: "Homerton Fertility Centre",
        provider_type: "NHS Service",
        website: "https://www.homerton.nhs.uk/fertility-centre",
        phone_number: "020 8510 7660",
        address_line: "Homerton University Hospital, Homerton Row",
        city: "London",
        postcode: "E9 6SR",
        latitude: 51.550635,
        longitude: -0.046072,
        service_name: "Fertility Support"
    },
    {
        provider_id: 6,
        provider_name: "Mortimer Market Centre Sexual Health Clinic London",
        provider_type: "NHS Service",
        website: "https://www.sexualhealth.cnwl.nhs.uk/clinic/mortimer-market-centre-including-margaret-pyke-centre/",
        phone_number: "020 3317 5252",
        address_line: "Capper Street",
        city: "London",
        postcode: "WC1E 6JB",
        latitude: 51.522722,
        longitude: -0.135518,
        service_name: "Sexual Health"
    },
    {
        provider_id: 7,
        provider_name: "Guy's Assisted Conception Unit",
        provider_type: "NHS Service",
        website: "https://www.guysandstthomas.nhs.uk/our-services/assisted-conception-unit-acu",
        phone_number: "020 7188 2300",
        address_line: "Guy's Hospital, Great Maze Pond",
        city: "London",
        postcode: "SE1 9RT",
        latitude: 51.503331,
        longitude: -0.086771,
        service_name: "Fertility Support"
    },
    {
        provider_id: 8,
        provider_name: "Camberwell Sexual Health Centre",
        provider_type: "NHS Service",
        website: "https://www.kch.nhs.uk/services/services-a-to-z/sexual-health/",
        phone_number: "020 3299 5091",
        address_line: "100 Denmark Hill",
        city: "London",
        postcode: "SE5 9RS",
        latitude: 51.468078,
        longitude: -0.093890,
        service_name: "Sexual Health"
    },
    {
        provider_id: 9,
        provider_name: "Women's Health, Welbeck London",
        provider_type: "Private Clinic",
        website: "https://welbeck.com/specialist-centres/private-womens-health-clinic",
        phone_number: "020 3653 2008",
        address_line: "1 Welbeck Street",
        city: "London",
        postcode: "W1G 0AR",
        latitude: 51.516185,
        longitude: -0.148094,
        service_name: "Women's General Health"
    },
    {
        provider_id: 10,
        provider_name: "London Gynaecology Moorgate Clinic",
        provider_type: "Private Clinic",
        website: "https://www.london-gynaecology.com/",
        phone_number: "020 3989 4744",
        address_line: "15 Austin Friars",
        city: "London",
        postcode: "EC2N 2HE",
        latitude: 51.515894,
        longitude: -0.085711,
        service_name: "Contraception"
    },
    {
        provider_id: 11,
        provider_name: "The Gynae Centre",
        provider_type: "Private Clinic",
        website: "https://www.gynae-centre.co.uk/",
        phone_number: "020 7580 8090",
        address_line: "7 Queen Anne Street",
        city: "London",
        postcode: "W1G 9HN",
        latitude: 51.518163,
        longitude: -0.145188,
        service_name: "Sexual Health"
    },
    {
        provider_id: 12,
        provider_name: "Gynaedoctors",
        provider_type: "Private Clinic",
        website: "https://gynaedoctors.com/",
        phone_number: "07703 316677",
        address_line: "121 Crawford Street",
        city: "London",
        postcode: "W1U 6BE",
        latitude: 51.519889,
        longitude: -0.158293,
        service_name: "Women's General Health"
    },
    {
        provider_id: 13,
        provider_name: "Grosvenor Gardens Gynaecology - Belgravia",
        provider_type: "Private Clinic",
        website: "https://gghealthcare.uk/",
        phone_number: "020 4540 3540",
        address_line: "2 Grosvenor Gardens",
        city: "London",
        postcode: "SW1W 0DH",
        latitude: 51.497224,
        longitude: -0.147220,
        service_name: "Fertility Support"
    },
    {
        provider_id: 14,
        provider_name: "London Women's Clinic London Bridge",
        provider_type: "Private Clinic",
        website: "https://www.londonwomensclinic.com/",
        phone_number: "020 7563 4309",
        address_line: "1 St Thomas Street",
        city: "London",
        postcode: "SE1 9RY",
        latitude: 51.505000,
        longitude: -0.088229,
        service_name: "Fertility Support"
    },
    {
        provider_id: 15,
        provider_name: "CRGH Great Portland Street",
        provider_type: "Private Clinic",
        website: "https://crgh.co.uk/",
        phone_number: "020 7837 2905",
        address_line: "230-232 Great Portland Street",
        city: "London",
        postcode: "W1W 5QS",
        latitude: 51.522978,
        longitude: -0.143724,
        service_name: "Fertility Support"
    },
    {
        provider_id: 16,
        provider_name: "IVI London - IVF Fertility Clinic UK",
        provider_type: "Private Clinic",
        website: "https://www.ivi.uk/clinics/london/",
        phone_number: "0808 239 5675",
        address_line: "83 Wimpole Street",
        city: "London",
        postcode: "W1G 9RQ",
        latitude: 51.516991,
        longitude: -0.147874,
        service_name: "Fertility Support"
    },
    {
        provider_id: 17,
        provider_name: "Clarewell Clinics",
        provider_type: "Private Clinic",
        website: "https://clarewellclinics.co.uk/",
        phone_number: "020 7390 0599",
        address_line: "9 Ivor Place",
        city: "London",
        postcode: "NW1 6BY",
        latitude: 51.524418,
        longitude: -0.161498,
        service_name: "Contraception"
    },
    {
        provider_id: 18,
        provider_name: "Ovara Health",
        provider_type: "Private Clinic",
        website: "https://ovarahealth.co.uk/",
        phone_number: "020 7751 4488",
        address_line: "274 Fulham Road",
        city: "London",
        postcode: "SW10 9EW",
        latitude: 51.483929,
        longitude: -0.184962,
        service_name: "Menopause Support"
    },
    {
        provider_id: 19,
        provider_name: "Babyinc",
        provider_type: "Private Clinic",
        website: "https://babyinc.co.uk/",
        phone_number: "020 7935 6500",
        address_line: "35 Devonshire Place",
        city: "London",
        postcode: "W1G 6JP",
        latitude: 51.521869,
        longitude: -0.150386,
        service_name: "Fertility Support"
    },
    {
        provider_id: 20,
        provider_name: "Hormone Health",
        provider_type: "Private Clinic",
        website: "https://hormonehealth.co.uk/",
        phone_number: "0808 196 1901",
        address_line: "OneWelbeck, 1 Welbeck Street",
        city: "London",
        postcode: "W1G 0AR",
        latitude: 51.516185,
        longitude: -0.148094,
        service_name: "Menopause Support"
    }
];

const serviceMapping = {
    1: "Fertility Support",
    2: "Menopause Support",
    3: "Sexual Health",
    4: "Contraception",
    5: "Pregnancy and Maternity",
    6: "Women's General Health"
};

function getProviders() {
    return mockProviders;
}

function getNearbyProviders(queryParams) {
    const { postcode, radius, service_id, provider_type } = queryParams;

    // Geocode the user's postcode (mock)
    const userLocation = mockGeocode(postcode);
    const userLat = userLocation.latitude;
    const userLng = userLocation.longitude;

    // Filter by service
    let filtered = mockProviders.filter(provider => {
        const serviceId = Object.keys(serviceMapping).find(
            id => serviceMapping[id] === provider.service_name
        );
        return serviceId === service_id;
    });

    // Filter by provider type
    if (provider_type && provider_type !== "all") {
        filtered = filtered.filter(
            provider => provider.provider_type === provider_type
        );
    }

    // Calculate distances and filter by radius
    let radiusMiles = radius === "all" ? Infinity : Number(radius);

    const withDistance = filtered.map(provider => {
        const distance = getDistanceMiles(
            userLat, userLng,
            provider.latitude, provider.longitude
        );
        return { ...provider, distance: Number(distance.toFixed(1)) };
    });

    const nearby = withDistance.filter(
        provider => provider.distance <= radiusMiles
    );

    // Sort by distance
    nearby.sort((a, b) => a.distance - b.distance);

    return nearby;
}

// Mock geocoding - returns London coordinates for any postcode
function mockGeocode(postcode) {
    // Return different mock coordinates based on the postcode
    const postcodes = {
        "sw1a": { latitude: 51.5014, longitude: -0.1419 },
        "ec1a": { latitude: 51.5175, longitude: -0.0992 },
        "w1a": { latitude: 51.5191, longitude: -0.1362 },
        "se1": { latitude: 51.5045, longitude: -0.0785 },
        "e1": { latitude: 51.5142, longitude: -0.0445 },
        "n1": { latitude: 51.5327, longitude: -0.1044 },
        "sw7": { latitude: 51.4985, longitude: -0.1778 },
        "default": { latitude: 51.5074, longitude: -0.1278 }
    };

    const key = postcode.toLowerCase().replace(/[^a-z0-9]/g, "").substring(0, 4);
    const location = postcodes[key] || postcodes.default;

    return location;
}

function getDistanceMiles(lat1, lon1, lat2, lon2) {
    const R = 3958.8;
    const toRad = (v) => (v * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

module.exports = {
    getProviders,
    getNearbyProviders,
    mockGeocode,
    serviceMapping
};
