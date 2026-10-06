-- Stores the core details for each healthcare provider 

CREATE TABLE providers (

    provider_id SERIAL PRIMARY KEY,

    provider_name VARCHAR(255) NOT NULL,

    provider_type VARCHAR(100) NOT NULL,

    website VARCHAR(255),

    phone_number VARCHAR(50),

    email VARCHAR(255),

    verified BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- Enable PostGIS for geographic point storage and queries.
CREATE EXTENSION IF NOT EXISTS postgis;

-- Stores provider locations for postcode and distance searches

CREATE TABLE locations (

    location_id SERIAL PRIMARY KEY,

    provider_id INT NOT NULL,

    address_line VARCHAR(255),

    city VARCHAR(100),

    postcode VARCHAR(10) NOT NULL,

    coordinates GEOGRAPHY(Point,4326),


    FOREIGN KEY (provider_id)
        REFERENCES providers(provider_id)
        ON DELETE CASCADE

);

-- Stores the healthcare services users can search for

CREATE TABLE services (

    service_id SERIAL PRIMARY KEY,

    service_name VARCHAR(100) NOT NULL UNIQUE

);


INSERT INTO services
(service_name)

VALUES

('Fertility Support'),
('Menopause Support'),
('Sexual Health'),
('Contraception'),
('Pregnancy and Maternity'),
('Women''s General Health');

-- Links providers to the services they offer (many-to-many relationship)

CREATE TABLE provider_services (

    provider_id INT NOT NULL,

    service_id INT NOT NULL,


    PRIMARY KEY(provider_id, service_id),


    FOREIGN KEY(provider_id)
        REFERENCES providers(provider_id)
        ON DELETE CASCADE,


    FOREIGN KEY(service_id)
        REFERENCES services(service_id)
        ON DELETE CASCADE

);


INSERT INTO providers
(
    provider_name,
    provider_type,
    website,
    phone_number,
    email,
    verified
)
VALUES

('Community Women''s Health Service (Barts Health)',
'NHS Service',
'https://www.bartshealth.nhs.uk/womens-health-services',
'020 8223 8449',
NULL,
TRUE),

('Oxleas Women''s and Girls'' Health Hub',
'NHS Service',
'https://oxleas.nhs.uk/womens-and-girls-hub/',
'020 8301 8920',
NULL,
TRUE),

('Queen Elizabeth Hospital Gynaecology Service',
'NHS Service',
'https://www.lewishamandgreenwich.nhs.uk/gynaecology',
'020 8836 4897',
NULL,
TRUE),

('Wolfson Fertility Centre',
'NHS Service',
'https://www.imperial.nhs.uk/our-services/fertility-and-reproductive-medicine/ivf',
'020 3313 4411',
NULL,
TRUE),

('Homerton Fertility Centre',
'NHS Service',
'https://www.homerton.nhs.uk/fertility-centre',
'020 8510 7660',
NULL,
TRUE),

('Mortimer Market Centre Sexual Health Clinic London',
'NHS Service',
'https://www.sexualhealth.cnwl.nhs.uk/clinic/mortimer-market-centre-including-margaret-pyke-centre/',
'020 3317 5252',
NULL,
TRUE),

('Guy''s Assisted Conception Unit',
'NHS Service',
'https://www.guysandstthomas.nhs.uk/our-services/assisted-conception-unit-acu',
'020 7188 2300',
NULL,
TRUE),

('Camberwell Sexual Health Centre',
'NHS Service',
'https://www.kch.nhs.uk/services/services-a-to-z/sexual-health/',
'020 3299 5091',
NULL,
TRUE),

('Women''s Health, Welbeck London',
'Private Clinic',
'https://welbeck.com/specialist-centres/private-womens-health-clinic',
'020 3653 2008',
NULL,
TRUE),

('London Gynaecology Moorgate Clinic',
'Private Clinic',
'https://www.london-gynaecology.com/',
'020 3989 4744',
NULL,
TRUE),

('The Gynae Centre',
'Private Clinic',
'https://www.gynae-centre.co.uk/',
'020 7580 8090',
NULL,
TRUE),

('Gynaedoctors',
'Private Clinic',
'https://gynaedoctors.com/',
'07703 316677',
NULL,
TRUE),

('Grosvenor Gardens Gynaecology - Belgravia',
'Private Clinic',
'https://gghealthcare.uk/',
'020 4540 3540',
NULL,
TRUE),

('London Women''s Clinic London Bridge',
'Private Clinic',
'https://www.londonwomensclinic.com/',
'020 7563 4309',
NULL,
TRUE),

('CRGH Great Portland Street',
'Private Clinic',
'https://crgh.co.uk/',
'020 7837 2905',
NULL,
TRUE),

('IVI London - IVF Fertility Clinic UK',
'Private Clinic',
'https://www.ivi.uk/clinics/london/',
'0808 239 5675',
NULL,
TRUE),

('Clarewell Clinics',
'Private Clinic',
'https://clarewellclinics.co.uk/',
'020 7390 0599',
NULL,
TRUE),

('Ovara Health',
'Private Clinic',
'https://ovarahealth.co.uk/',
'020 7751 4488',
NULL,
TRUE),

('Babyinc',
'Private Clinic',
'https://babyinc.co.uk/',
'020 7935 6500',
NULL,
TRUE),

('Hormone Health',
'Private Clinic',
'https://hormonehealth.co.uk/',
'0808 196 1901',
NULL,
TRUE),

('Aberdeen Fertility Centre',
'NHS Service',
'https://www.aberdeenfertility.org.uk',
'01224 553101',
'gram.aberdeenfertility@nhs.scot',
TRUE),

('Agora Clinic Brighton',
'Private Clinic',
'https://www.agoraclinic.co.uk',
'01273 229410',
'admin@agoraclinic.co.uk',
TRUE),

('Agora Clinic Eastbourne',
'Private Clinic',
'https://agoraclinic.co.uk/',
'01273 229410',
'admin@agoraclinic.co.uk',
TRUE),

('Ayrshire Fertility Unit, University Hospital Crosshouse',
'NHS Service',
'https://www.nhsayrshireandarran.com',
'01563 521133',
NULL,
TRUE),

('Beginnings at Epsom & St Helier NHS University Trust',
'NHS Service',
'https://beginningsacu.co.uk/',
'0208 296 3860',
'esth.beginnings@nhs.net',
TRUE),

('Birmingham Women''s Hospital',
'NHS Service',
'https://bwc.nhs.uk/fertility-centre/',
'0121 335 8270',
NULL,
TRUE),

('Bourn Hall Clinic',
'Private Clinic',
'https://www.bournhall.co.uk',
'01954 719111',
'info@bourn-hall.com',
TRUE),

('Bourn Hall Clinic Colchester',
'Private Clinic',
'https://www.bournhall.co.uk',
NULL,
'info@bourn-hall.com',
TRUE),

('Bourn Hall Clinic Norwich',
'Private Clinic',
'https://www.bournhall.co.uk',
'01935 600150',
'info@bourn-hall.com',
TRUE),

('Bourn Hall Clinic Wickford',
'Private Clinic',
'https://www.bournhall.co.uk',
'01268 661700',
'wickfordinfo@bourn-hall.com',
TRUE),

('Bristol Centre for Reproductive Medicine',
'Private Clinic',
'https://www.fertilitybristol.com',
'0117 2591159',
'admin@bcrm.clinic',
TRUE),

('Bristol Fertility Clinic',
'Private Clinic',
'https://www.fertilitybristol.com/our-clinic/satellite-clinics/spire-bristol-hospital',
'0117 2591159',
'admin@bcrm.clinic',
TRUE),

('Cambridge IVF',
'Private Clinic',
'https://www.cambridge-ivf.org.uk',
'01223 349010',
'add-tr.cambridgeivf@nhs.net',
TRUE),

('Care Fertility Bath',
'Private Clinic',
'https://www.carefertility.com',
'01761 434464',
'Bath@carefertility.com',
TRUE),

('Care Fertility Cardiff',
'Private Clinic',
'https://www.crgw.co.uk',
'01443 443999',
'info@crgw.co.uk',
TRUE),

('Care Fertility Cheshire',
'Private Clinic',
'https://carefertility.com/clinics/cheshire',
'0800 5642270',
'Sue.Montgomery@carefertility.com',
TRUE),

('Care Fertility Leeds',
'Private Clinic',
'https://carefertility.com/clinics/leeds',
'0113 5216800',
'CAREpalsLeeds@carefertility.com',
TRUE),

('Care Fertility Liverpool',
'Private Clinic',
'https://carefertility.com/clinics/liverpool',
'0151 5562127',
NULL,
TRUE),

('Care Fertility London',
'Private Clinic',
'https://carefertility.com/clinics/london',
'0207 6166767',
'info@carefertility.com',
TRUE),

('Care Fertility Manchester',
'Private Clinic',
'https://carefertility.com/clinics/manchester',
'0161 2493040',
'info@carefertility.com',
TRUE),

('Care Fertility Northampton',
'Private Clinic',
'https://carefertility.com/clinics/northampton',
'01604 601606',
'Northampton@carefertility.com',
TRUE),

('Care Fertility Nottingham',
'Private Clinic',
'https://carefertility.com/clinics/nottingham',
'0115 8528100',
'info@carefertility.com',
TRUE),

('CARE Fertility Plymouth',
'Private Clinic',
'https://carefertility.com/clinics/plymouth',
'01752 787999',
NULL,
TRUE),

('Care Fertility Sheffield',
'Private Clinic',
'https://carefertility.com/clinics/sheffield',
'0114 2589716',
'Sheffield@carefertility.com',
TRUE),

('Care Fertility Tamworth',
'Private Clinic',
'https://carefertility.com/clinics/tamworth',
'01827 311170',
'info@carefertility.com',
TRUE),

('Care Fertility Tunbridge Wells',
'Private Clinic',
'https://carefertility.com/clinics/tunbridge-wells',
'01892 614110',
'info@carefertility.com',
TRUE),

('Care Fertility Woking',
'Private Clinic',
'https://www.carefertility.com/our-clinics/care-fertility-woking/',
'01483 957070',
'Woking@carefertility.com',
TRUE),

('Complete Fertility Centre Southampton',
'Private Clinic',
'https://www.completefertility.co.uk',
'02380 010570',
'info@completefertility.co.uk',
TRUE),

('Edinburgh Fertility Centre',
'NHS Service',
'https://www.nhslothian.scot.nhs.uk/edinburghivf',
'0131 2422460',
'acu@nhslothian.scot.nhs.uk',
TRUE),

('Wales Fertility Institute – Neath',
'NHS Service',
'https://www.hfea.gov.uk/choose-a-fertility-clinic/search/results/9107-wales-fertility-institute-neath/',
'01639 862698',
'stephanie.herring2@wales.nhs.uk',
TRUE);

INSERT INTO locations
(
provider_id,
address_line,
city,
postcode,
coordinates
)
VALUES

(1,'Sylvia Pankhurst Centre, Mile End Hospital, Bancroft Road','London','E1 4DG',ST_SetSRID(ST_Point(-0.042179,51.525049),4326)),

(2,'Market Street Health Centre, Woolwich','London','SE18 6QR',ST_SetSRID(ST_Point(0.063847,51.489885),4326)),

(3,'Stadium Road, Woolwich','London','SE18 4QH',ST_SetSRID(ST_Point(0.050069,51.478194),4326)),

(4,'Hammersmith Hospital, Du Cane Road','London','W12 0HS',ST_SetSRID(ST_Point(-0.234698,51.517420),4326)),

(5,'Homerton University Hospital, Homerton Row','London','E9 6SR',ST_SetSRID(ST_Point(-0.046072,51.550635),4326)),

(6,'Capper Street','London','WC1E 6JB',ST_SetSRID(ST_Point(-0.135518,51.522722),4326)),

(7,'Guy''s Hospital, Great Maze Pond','London','SE1 9RT',ST_SetSRID(ST_Point(-0.086771,51.503331),4326)),

(8,'Camberwell Building, 100 Denmark Hill','London','SE5 9RS',ST_SetSRID(ST_Point(-0.093890,51.468078),4326)),

(9,'1 Welbeck Street','London','W1G 0AR',ST_SetSRID(ST_Point(-0.148094,51.516185),4326)),

(10,'15 Austin Friars','London','EC2N 2HE',ST_SetSRID(ST_Point(-0.085711,51.515894),4326)),

(11,'7 Queen Anne Street','London','W1G 9HN',ST_SetSRID(ST_Point(-0.145188,51.518163),4326)),

(12,'121 Crawford Street','London','W1U 6BE',ST_SetSRID(ST_Point(-0.158293,51.519889),4326)),

(13,'2 Grosvenor Gardens','London','SW1W 0DH',ST_SetSRID(ST_Point(-0.147220,51.497224),4326)),

(14,'1 St Thomas Street','London','SE1 9RY',ST_SetSRID(ST_Point(-0.088229,51.505000),4326)),

(15,'230-232 Great Portland Street','London','W1W 5QS',ST_SetSRID(ST_Point(-0.143724,51.522978),4326)),

(16,'83 Wimpole Street','London','W1G 9RQ',ST_SetSRID(ST_Point(-0.147874,51.516991),4326)),

(17,'9 Ivor Place','London','NW1 6BY',ST_SetSRID(ST_Point(-0.161498,51.524418),4326)),

(18,'274 Fulham Road','London','SW10 9EW',ST_SetSRID(ST_Point(-0.184962,51.483929),4326)),

(19,'35 Devonshire Place','London','W1G 6JP',ST_SetSRID(ST_Point(-0.150386,51.521869),4326)),

(20,'OneWelbeck, 1 Welbeck Street','London','W1G 0AR',ST_SetSRID(ST_Point(-0.148094,51.516185),4326));

INSERT INTO provider_services
(provider_id, service_id)
VALUES

-- Women's General Health
(3,6),
(9,6),
(11,6),
(12,6),
(13,6),
(18,6),
(20,6),

-- Contraception
(1,4),
(2,4),
(8,4),
(9,4),
(10,4),
(11,4),
(12,4),
(17,4),

-- Sexual Health
(6,3),
(8,3),
(11,3),
(12,3),
(17,3),

-- Fertility Support
(2,1),
(3,1),
(4,1),
(5,1),
(7,1),
(10,1),
(13,1),
(14,1),
(15,1),
(16,1),
(18,1),
(19,1),

-- Pregnancy and Maternity
(9,5),
(12,5),
(13,5),

-- Menopause Support
(1,2),
(2,2),
(3,2),
(10,2),
(11,2),
(12,2),
(18,2),
(19,2),
(20,2);


INSERT INTO locations
(
    provider_id,
    address_line,
    city,
    postcode,
    coordinates
)
VALUES

(21,'Department of Obstetrics & Gynaecology, Aberdeen Maternity Hospital, Foresterhill','Aberdeen','AB25 2ZL',ST_SetSRID(ST_Point(-2.132080,57.155245),4326)),

(22,'138 Dyke Road','Brighton','BN1 5PA',ST_SetSRID(ST_Point(-0.150779,50.834805),4326)),

(23,'J7 J8 Franklin House, Chaucer Business Park, Dittons Road, Polegate','Polegate','BN26 6JF',ST_SetSRID(ST_Point(0.268208,50.819678),4326)),

(24,'Crosshouse, Kilmarnock, Ayrshire','Kilmarnock','KA2 0BE',ST_SetSRID(ST_Point(-4.539389,55.613939),4326)),

(25,'Assisted Conception Unit, Womens Health, St Helier Hospital, Wrythe Lane, Carshalton','Carshalton','SM5 1AA',ST_SetSRID(ST_Point(-0.183708,51.380188),4326)),

(26,'Assisted Conception Unit, Birmingham Women''s Hospital, Edgbaston','Birmingham','B15 2TG',ST_SetSRID(ST_Point(-1.942900,52.453245),4326)),

(27,'Bourn, Cambridge, Cambridgeshire','Bourn','CB23 2TN',ST_SetSRID(ST_Point(-0.067094,52.188121),4326)),

(28,'Charter Court, Newcomen Way, Highwoods','Colchester','CO4 9YA',ST_SetSRID(ST_Point(0.927580,51.921515),4326)),

(29,'Unit 3, The Apex Gateway 11, Farrier Close','Wymondham','NR18 0WF',ST_SetSRID(ST_Point(1.141549,52.578311),4326)),

(30,'Bourn Hall Clinic Wickford, 25 London Road','Wickford','SS12 0AW',ST_SetSRID(ST_Point(0.518417,51.611337),4326)),

(31,'135 Aztec West, Park Avenue, Almondsbury','Bristol','BS32 4UB',ST_SetSRID(ST_Point(-2.567176,51.541122),4326)),

(32,'Spire Bristol Hospital, The Glen, Redland Hill','Bristol','BS6 6UT',ST_SetSRID(ST_Point(-2.614868,51.472042),4326)),

(33,'Kefford House, Maris Lane, Trumpington','Cambridge','CB2 9LG',ST_SetSRID(ST_Point(0.108087,52.173314),4326)),

(34,'Bath Business Park, Roman Way, Peasedown St John','Bath','BA2 8SG',ST_SetSRID(ST_Point(-2.414415,51.312220),4326)),

(35,'Ely Meadows, Rhodfa Marics, Llantrisant','Llantrisant','CF72 8XL',ST_SetSRID(ST_Point(-3.391745,51.545885),4326)),

(36,'5400 Daresbury Park, Daresbury','Daresbury','WA4 4GE',ST_SetSRID(ST_Point(-2.642147,53.332053),4326)),

(37,'Seacroft Hospital, York Road','Leeds','LS14 6UH',ST_SetSRID(ST_Point(-1.470908,53.806606),4326)),

(38,'8 Princes Dock, Pier Head','Liverpool','L3 1DL',ST_SetSRID(ST_Point(-2.999018,53.407606),4326)),

(39,'Park Lorne, 111 Park Road','London','NW8 7JL',ST_SetSRID(ST_Point(-0.165465,51.527573),4326)),

(40,'108-112 Daisy Bank Road, Victoria Park','Manchester','M14 5QH',ST_SetSRID(ST_Point(-2.217764,53.458543),4326)),

(41,'67 The Avenue, Cliftonville','Northampton','NN1 5BT',ST_SetSRID(ST_Point(-0.877319,52.236393),4326)),

(42,'John Webster House, 6 Lawrence Drive, Nottingham Business Park','Nottingham','NG8 6PZ',ST_SetSRID(ST_Point(-1.239408,52.981218),4326)),

(43,'10 William Prance Road, Science Park, Derriford','Plymouth','PL6 5WR',ST_SetSRID(ST_Point(-4.120241,50.411272),4326)),

(44,'24-26 Glen Road','Sheffield','S7 1RA',ST_SetSRID(ST_Point(-1.486217,53.358666),4326)),

(45,'Tamworth House, Ventura Park Road','Tamworth','B78 3HL',ST_SetSRID(ST_Point(-1.707882,52.626766),4326)),

(46,'Amberley House, 9 Queens Road','Tunbridge Wells','TN4 9LL',ST_SetSRID(ST_Point(0.261677,51.141000),4326)),

(47,'5 Hillview Road','Woking','GU22 7HW',ST_SetSRID(ST_Point(-0.557610,51.314509),4326)),

(48,'Templars Way, Hampshire House, Chandlers Ford','Eastleigh','SO53 3RY',ST_SetSRID(ST_Point(-1.393292,50.968601),4326)),

(49,'Royal Infirmary of Edinburgh, 51 Little France Crescent','Edinburgh','EH16 4SA',ST_SetSRID(ST_Point(-3.135940,55.921754),4326)),

(50,'Neath Port Talbot Hospital, Baglan Way','Port Talbot','SA12 7BX',ST_SetSRID(ST_Point(-3.800367,51.599217),4326));

INSERT INTO provider_services
(
    provider_id,
    service_id
)
VALUES

(21,1),
(22,1),
(23,1),
(24,1),
(25,1),
(26,1),
(27,1),
(28,1),
(29,1),
(30,1),
(31,1),
(32,1),
(33,1),
(34,1),
(35,1),
(36,1),
(37,1),
(38,1),
(39,1),
(40,1),
(41,1),
(42,1),
(43,1),
(44,1),
(45,1),
(46,1),
(47,1),
(48,1),
(49,1),
(50,1);


