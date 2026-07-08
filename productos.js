// Base de Datos Unificada para Generador de Fichas Xiaomi
const productos = [
    {
        "codigo": "7393",
        "nombre": "REDMI NOTE 12 PRO 5G",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50 MP IMX766 con OIS",
        "spec3": "5000 MAH",
        "precio": 3599,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "7392",
        "nombre": "REDMI NOTE 12 PRO 5G",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50 MP IMX766 con OIS",
        "spec3": "5000 MAH",
        "precio": 3599,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "7389",
        "nombre": "REDMI NOTE 12 PRO 5G",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50 MP IMX766 con OIS",
        "spec3": "5000 MAH",
        "precio": 3599,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "6431",
        "nombre": "REDMI 10A",
        "categoria": "telefono",
        "spec1": "",
        "spec2": "",
        "spec3": "",
        "precio": 649,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7397",
        "nombre": "Redmi 12C + Combo Fan",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1999,
        "precioOferta": 1399
    }
    ,
    {
        "codigo": "7404",
        "nombre": "REDMI 12C",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1499,
        "precioOferta": 1099
    }
    ,
    {
        "codigo": "7398",
        "nombre": "REDMI 12C",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1499,
        "precioOferta": 1099
    }
    ,
    {
        "codigo": "7403",
        "nombre": "REDMI 12C",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1499,
        "precioOferta": 1099
    }
    ,
    {
        "codigo": "7399",
        "nombre": "REDMI 12C",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1499,
        "precioOferta": 1099
    }
    ,
    {
        "codigo": "6936",
        "nombre": "REDMI A1",
        "categoria": "telefono",
        "spec1": "6.52” DotDisplay FHD+",
        "spec2": "8 MP f/2,2 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 549,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7394",
        "nombre": "REDMI A2",
        "categoria": "telefono",
        "spec1": "",
        "spec2": "",
        "spec3": "",
        "precio": 549,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7396",
        "nombre": "REDMI A2",
        "categoria": "telefono",
        "spec1": "6.52” DotDisplay FHD+",
        "spec2": "8 MP f/2,2 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 549,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7395",
        "nombre": "REDMI A2",
        "categoria": "telefono",
        "spec1": "6.52” DotDisplay FHD+",
        "spec2": "8 MP f/2,2 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 549,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7387",
        "nombre": "Redmi Note 12",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50MP f/1,8 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 2899,
        "precioOferta": 1799
    }
    ,
    {
        "codigo": "7386",
        "nombre": "REDMI NOTE 12 4G",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50MP f/1,8 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 2199,
        "precioOferta": 1199
    }
    ,
    {
        "codigo": "7388",
        "nombre": "Redmi Note 12",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50MP f/1,8 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 2899,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "7010",
        "nombre": "REDMI PAD",
        "categoria": "telefono",
        "spec1": "10,61\" FHD IPS",
        "spec2": "8MP f/2,0 Cámara principal",
        "spec3": "8000 MAH",
        "precio": 1599,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "7081",
        "nombre": "REDMI PAD",
        "categoria": "telefono",
        "spec1": "10,61\" FHD IPS",
        "spec2": "8MP f/2,0 Cámara principal",
        "spec3": "8000 MAH",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7080",
        "nombre": "REDMI PAD",
        "categoria": "telefono",
        "spec1": "10,61\" Brillo 400 nits",
        "spec2": "8MP f/2,0 Cámara principal",
        "spec3": "8000 MAH",
        "precio": 1599,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "7532",
        "nombre": "NOTE 12S",
        "categoria": "telefono",
        "spec1": "6.43” FHD+ DotDisplay",
        "spec2": "108 MP f/1,9 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 2599,
        "precioOferta": 1899
    }
    ,
    {
        "codigo": "7533",
        "nombre": "Redmi Note 12S + Combo Fan",
        "categoria": "telefono",
        "spec1": "6.43” FHD+ DotDisplay",
        "spec2": "108 MP f/1,9 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 3899,
        "precioOferta": 2599
    }
    ,
    {
        "codigo": "7320",
        "nombre": "POCO X5 5G",
        "categoria": "telefono",
        "spec1": "6.67\" FHD+ DotDisplay",
        "spec2": "48 MP f/1,8 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7756",
        "nombre": "XIAOMI PAD 6",
        "categoria": "telefono",
        "spec1": "11\" IPS",
        "spec2": "13 MP f/2,2 Cámara Principal",
        "spec3": "8840 MAH",
        "precio": 4499,
        "precioOferta": 3799
    }
    ,
    {
        "codigo": "7959",
        "nombre": "XIAOMI 13T",
        "categoria": "telefono",
        "spec1": "6.67” AMOLED FHD+",
        "spec2": "50MP f/1,9 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 4999,
        "precioOferta": 4799
    }
    ,
    {
        "codigo": "7801",
        "nombre": "Redmi Note 12 + Combo Mother Day",
        "categoria": "telefono",
        "spec1": "6.67” FHD+ DotDisplay",
        "spec2": "50MP f/1,8 Cámara principal",
        "spec3": "5000 MAH",
        "precio": 2899,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "8185",
        "nombre": "Redmi 13C",
        "categoria": "telefono",
        "spec1": "6.74\" LCD HD+",
        "spec2": "Cámara principal de 50 MP",
        "spec3": "5000 MAH",
        "precio": 1999,
        "precioOferta": 1299
    }
    ,
    {
        "codigo": "7656",
        "nombre": "REDMI 12",
        "categoria": "telefono",
        "spec1": "LCD de 6,79 pulgadas",
        "spec2": "Cámara principal 50 MP f/1,8",
        "spec3": "5000 MAH",
        "precio": 1999,
        "precioOferta": 1199
    }
    ,
    {
        "codigo": "7842",
        "nombre": "Redmi Pad SE",
        "categoria": "telefono",
        "spec1": "FHD+ de 11''",
        "spec2": "Cámara trasera de 8 MP",
        "spec3": "8000 MAH",
        "precio": 1999,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "8236",
        "nombre": "Redmi Note 13",
        "categoria": "telefono",
        "spec1": "6.67\" AMOLED",
        "spec2": "Cámara principal 108 MP (f/1.65)",
        "spec3": "5000 MAH",
        "precio": 2399,
        "precioOferta": 1499
    }
    ,
    {
        "codigo": "8242",
        "nombre": "Redmi Note 13 Pro Plus",
        "categoria": "telefono",
        "spec1": "6.67\" AMOLED",
        "spec2": "Cámara principal 200 MP f/1,7 OIS",
        "spec3": "5000 MAH",
        "precio": 4399,
        "precioOferta": 3299
    }
    ,
    {
        "codigo": "8240",
        "nombre": "Redmi Note 13 Pro 4G",
        "categoria": "telefono",
        "spec1": "6.67\" AMOLED",
        "spec2": "Cámara principal 200 MP (f/1.65)",
        "spec3": "5000 MAH",
        "precio": 2899,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "8241",
        "nombre": "Redmi Note 13 Pro 4G",
        "categoria": "telefono",
        "spec1": "6.67\" AMOLED",
        "spec2": "Cámara principal 200 MP (f/1.65)",
        "spec3": "5000 MAH",
        "precio": 2899,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "8577",
        "nombre": "REDMI A3",
        "categoria": "telefono",
        "spec1": "6.67 Dot Drop",
        "spec2": "Cámara principal 8 MP (f/2,0)",
        "spec3": "5000 MAH",
        "precio": 1199,
        "precioOferta": 699
    }
    ,
    {
        "codigo": "8014",
        "nombre": "Redmi 12 + Combo Mother Day",
        "categoria": "telefono",
        "spec1": "6.79 IPS LCD",
        "spec2": "Cámara principal 50 MP (f/1,8)",
        "spec3": "5000 MAH",
        "precio": 2299,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "8772",
        "nombre": "Xiaomi 14 Ultra + 2 Años Garantía",
        "categoria": "telefono",
        "spec1": "AMOLED WQHD+ de 6,73\"",
        "spec2": "Cámara Leica 50 MP F1.63-F4.0",
        "spec3": "5000 MAH",
        "precio": 11599,
        "precioOferta": 10999
    }
    ,
    {
        "codigo": "8658",
        "nombre": "Xiaomi 14 Ultra + 2 Años Garantía",
        "categoria": "telefono",
        "spec1": "AMOLED WQHD+ de 6,73\"",
        "spec2": "Cámara Leica 50 MP F1.63-F4.0",
        "spec3": "5000 MAH",
        "precio": 11599,
        "precioOferta": 10999
    }
    ,
    {
        "codigo": "8805",
        "nombre": "REDMI PAD PRO",
        "categoria": "telefono",
        "spec1": "2,5K de 120 Hz y 12,1\"",
        "spec2": "Cámara principal 8 MP (f/2,8)",
        "spec3": "10000 MAH",
        "precio": 2899,
        "precioOferta": 2499
    }
    ,
    {
        "codigo": "8796",
        "nombre": "REDMI 13 8GB/256GB",
        "categoria": "telefono",
        "spec1": "IPS 6.79\" LCD, 90Hz,",
        "spec2": "Cámara principal 108 MP (f/1,8)",
        "spec3": "5000 MAH",
        "precio": 1899,
        "precioOferta": 1399
    }
    ,
    {
        "codigo": "9038",
        "nombre": "REDMI NOTE 13 PRO 5G",
        "categoria": "telefono",
        "spec1": "Pantalla AMOLED de 6,67'",
        "spec2": "Cámara principal 200 MP (f/1.65)",
        "spec3": "5100 MAH",
        "precio": 3599,
        "precioOferta": 2849
    }
    ,
    {
        "codigo": "9171",
        "nombre": "REDMI PAD SE 8.7\" LTE",
        "categoria": "telefono",
        "spec1": "LCD 8,7\" 90HZ",
        "spec2": "Cámara principal 8 MP (f/2.0)",
        "spec3": "6650 MAH",
        "precio": 1399,
        "precioOferta": 1199
    }
    ,
    {
        "codigo": "8801",
        "nombre": "REDMI A3X",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal 8 MP (f/2.0)",
        "spec3": "5000 MAH",
        "precio": 1299,
        "precioOferta": 899
    }
    ,
    {
        "codigo": "9283",
        "nombre": "Xiaomi Mix Flip",
        "categoria": "telefono",
        "spec1": "CrystalRes de 1-120 Hz y 6,86\"",
        "spec2": "LEICA VARIO-SUMMILUX 50 MP",
        "spec3": "4780 MAH",
        "precio": 10999,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9333",
        "nombre": "Redmi Pad SE",
        "categoria": "telefono",
        "spec1": "FHD+ de 11''",
        "spec2": "Cámara trasera de 8 MP",
        "spec3": "8000 MAH",
        "precio": 1699,
        "precioOferta": 1199
    }
    ,
    {
        "codigo": "9277",
        "nombre": "Redmi 14 C",
        "categoria": "telefono",
        "spec1": "6.88\"  IPS LCD, 120Hz",
        "spec2": "Cámara principal 50 MP (f/1.8)",
        "spec3": "5160 MAH",
        "precio": 1499,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "9282",
        "nombre": "Xiaomi 14T",
        "categoria": "telefono",
        "spec1": "AMOLED 6.67\" 144Hz con IA",
        "spec2": "Doble Cámara Leica50 MP",
        "spec3": "5000 MAH",
        "precio": 5499,
        "precioOferta": 4099
    }
    ,
    {
        "codigo": "9331",
        "nombre": "Xiaomi 14T Pro",
        "categoria": "telefono",
        "spec1": "AMOLED 6.67\" 144Hz con IA",
        "spec2": "Doble Cámara Leica50 MP",
        "spec3": "5000 MAH",
        "precio": 6499,
        "precioOferta": 4999
    }
    ,
    {
        "codigo": "9733",
        "nombre": "Redmi Note 14 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 200 MP OIS f/1,65",
        "spec3": "5110 MAH",
        "precio": 3299,
        "precioOferta": 2999
    }
    ,
    {
        "codigo": "9736",
        "nombre": "Redmi Note 14 Pro",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 200 MP OIS f/1,65",
        "spec3": "5500 MAH",
        "precio": 2399,
        "precioOferta": 1799
    }
    ,
    {
        "codigo": "GT9798",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "GT9792",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "10579",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "GT9793",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "9792",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1599,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "9793",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "9798",
        "nombre": "Redmi Note 14",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 108 MP f1,7",
        "spec3": "5500 MAH",
        "precio": 1699,
        "precioOferta": 1275
    }
    ,
    {
        "codigo": "9730",
        "nombre": "Redmi Note 14 Pro 5G",
        "categoria": "telefono",
        "spec1": "CrystalRes AMOLED de 6,67\"",
        "spec2": "Cámara principal de 200 MP OIS f/1,65",
        "spec3": "5110 MAH",
        "precio": 3299,
        "precioOferta": 2599
    }
    ,
    {
        "codigo": "9835",
        "nombre": "Xiaomi Pad 7 Pro",
        "categoria": "telefono",
        "spec1": "LCD 3.2K CrystalRes",
        "spec2": "50 MP, f/1.8 + 2 MP Profundidad 2.4",
        "spec3": "8850 MAH",
        "precio": 4999,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9964",
        "nombre": "Redmi Note 14S",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,67\" 120 Hz",
        "spec2": "Cámara principal de 200 MP OIS f/1,7",
        "spec3": "5000 MAH",
        "precio": 2199,
        "precioOferta": 1999
    }
    ,
    {
        "codigo": "9967",
        "nombre": "REDMI PAD PRO",
        "categoria": "telefono",
        "spec1": "2,5K de 120 Hz y 12,1\"",
        "spec2": "Cámara principal 8 MP (f/2,8)",
        "spec3": "10000 MAH",
        "precio": 2899,
        "precioOferta": 2299
    }
    ,
    {
        "codigo": "10120",
        "nombre": "XIAOMI 15",
        "categoria": "telefono",
        "spec1": "CrystalRes 6.36\" 3200 nits",
        "spec2": "Leica 50MP f/1.62 OIS",
        "spec3": "5240 MAH wireless HyperCharge 50W",
        "precio": 7999,
        "precioOferta": 7499
    }
    ,
    {
        "codigo": "7881",
        "nombre": "Redmi Pad SE",
        "categoria": "telefono",
        "spec1": "FHD+ de 11''",
        "spec2": "Cámara trasera de 8 MP",
        "spec3": "8000 MAH",
        "precio": 1699,
        "precioOferta": 1256
    }
    ,
    {
        "codigo": "10462",
        "nombre": "Redmi Pad 2 WIFI",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1599,
        "precioOferta": 1499
    }
    ,
    {
        "codigo": "GT10462",
        "nombre": "Redmi Pad 2 WIFI",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1599,
        "precioOferta": 1499
    }
    ,
    {
        "codigo": "11545",
        "nombre": "Redmi Pad 2 WIFI",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1599,
        "precioOferta": 1499
    }
    ,
    {
        "codigo": "GT11545",
        "nombre": "Redmi Pad 2 WIFI",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1599,
        "precioOferta": 1499
    }
    ,
    {
        "codigo": "10707",
        "nombre": "Redmi Pad 2 LTE",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1899,
        "precioOferta": 1599
    }
    ,
    {
        "codigo": "GT10707",
        "nombre": "Redmi Pad 2 LTE",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 1899,
        "precioOferta": 1599
    }
    ,
    {
        "codigo": "9972",
        "nombre": "Xiaomi Pad 7",
        "categoria": "telefono",
        "spec1": "LCD 3.2K CrystalRes",
        "spec2": "13 MP, F 2.2",
        "spec3": "8850 MAH",
        "precio": 4299,
        "precioOferta": 3599
    }
    ,
    {
        "codigo": "10118",
        "nombre": "Xiaomi 15 Ultra",
        "categoria": "telefono",
        "spec1": "AMOLED WQHD+ de 6,73",
        "spec2": "50MP, 200MP, 50MP, 50MP",
        "spec3": "5410 MAH",
        "precio": 11499,
        "precioOferta": 8999
    }
    ,
    {
        "codigo": "11022",
        "nombre": "Xiaomi 15T",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 120 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 5648,
        "precioOferta": 4299
    }
    ,
    {
        "codigo": "11023",
        "nombre": "Xiaomi 15T",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 120 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 5648,
        "precioOferta": 4299
    }
    ,
    {
        "codigo": "11021",
        "nombre": "Xiaomi 15T",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 120 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 5648,
        "precioOferta": 4299
    }
    ,
    {
        "codigo": "11019",
        "nombre": "Xiaomi 15T Pro",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 144 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 6499,
        "precioOferta": 6299
    }
    ,
    {
        "codigo": "11020",
        "nombre": "Xiaomi 15T Pro",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 144 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 6499,
        "precioOferta": 6299
    }
    ,
    {
        "codigo": "11024",
        "nombre": "Xiaomi 15T Pro",
        "categoria": "telefono",
        "spec1": "AMOLED de 6,83\" 144 Hz",
        "spec2": "50MP, 50MP, 12MP",
        "spec3": "5500 MAH",
        "precio": 6499,
        "precioOferta": 6299
    }
    ,
    {
        "codigo": "10879",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1099,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "10876",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 999,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10876",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1099,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "GT11026",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1099,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "GT10879",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1099,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "10875",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1499,
        "precioOferta": 1399
    }
    ,
    {
        "codigo": "11113",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1299,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10874",
        "nombre": "Redmi 15C",
        "categoria": "telefono",
        "spec1": "6.9\" Dot Drop display",
        "spec2": "50MP f1.8 + 5Mp",
        "spec3": "6000 MAH",
        "precio": 1299,
        "precioOferta": 1049
    }
    ,
    {
        "codigo": "10127",
        "nombre": "Redmi A5",
        "categoria": "telefono",
        "spec1": "LCD 6.88″ HD+ (720 × 1640)",
        "spec2": "Cámara principal de 32 MP (f/2.0)",
        "spec3": "Batería de 5200 mAh",
        "precio": 999,
        "precioOferta": 899
    }
    ,
    {
        "codigo": "9795",
        "nombre": "Redmi note 14 5G",
        "categoria": "telefono",
        "spec1": "CrystalRes AMOLED de 6,67\"",
        "spec2": "Cámara principal de 108 MP OIS f/1,7",
        "spec3": "Batería de 5110mAh",
        "precio": 2099,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7166",
        "nombre": "Poco C40",
        "categoria": "telefono",
        "spec1": "Dot Drop de 6,71\"",
        "spec2": "Cámara principal de 13 MP (ƒ/2,2)",
        "spec3": "Batería 6000 mAh",
        "precio": 1799,
        "precioOferta": 1169
    }
    ,
    {
        "codigo": "11122",
        "nombre": "Redmi Pad 2 Pro",
        "categoria": "telefono",
        "spec1": "2,5K de 120 Hz y 12,1\"",
        "spec2": "8 MP 1/4\", f/2",
        "spec3": "12000 mAh",
        "precio": 2899,
        "precioOferta": 2699
    }
    ,
    {
        "codigo": "11417",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 1899,
        "precioOferta": 1799
    }
    ,
    {
        "codigo": "11418",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 1899,
        "precioOferta": 1799
    }
    ,
    {
        "codigo": "GT11418",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 1899,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "GT11419",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 1899,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "11419",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 1899,
        "precioOferta": 1699
    }
    ,
    {
        "codigo": "GT11406",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2199,
        "precioOferta": 1899
    }
    ,
    {
        "codigo": "11408",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2199,
        "precioOferta": 1899
    }
    ,
    {
        "codigo": "GT11416",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2199,
        "precioOferta": 1899
    }
    ,
    {
        "codigo": "11406",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2199,
        "precioOferta": 1799
    }
    ,
    {
        "codigo": "11416",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2199,
        "precioOferta": 1899
    }
    ,
    {
        "codigo": "11410",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2499,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11410",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2499,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11422",
        "nombre": "Redmi Note 15 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 108 MP F1.7",
        "spec3": "Batería de 6000 mAh",
        "precio": 2499,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11405",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2999,
        "precioOferta": 2399
    }
    ,
    {
        "codigo": "GT11420",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 3299,
        "precioOferta": 2599
    }
    ,
    {
        "codigo": "11420",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 3299,
        "precioOferta": 2599
    }
    ,
    {
        "codigo": "11413",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2899,
        "precioOferta": 2399
    }
    ,
    {
        "codigo": "GT11413",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2999,
        "precioOferta": 2299
    }
    ,
    {
        "codigo": "GT11404",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2999,
        "precioOferta": 2299
    }
    ,
    {
        "codigo": "11409",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2999,
        "precioOferta": 2299
    }
    ,
    {
        "codigo": "11404",
        "nombre": "Redmi Note 15 Pro 4G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.77\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 2999,
        "precioOferta": 2199
    }
    ,
    {
        "codigo": "11402",
        "nombre": "Redmi Note 15 Pro 5G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.83\" 1.5K",
        "spec2": "Cámara 200 MP F1.7",
        "spec3": "Batería de 6580 mAh",
        "precio": 3599,
        "precioOferta": 3199
    }
    ,
    {
        "codigo": "GT11544",
        "nombre": "Redmi Note 15 Pro 5G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.83\" 1.5K",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6580 mAh",
        "precio": 3899,
        "precioOferta": 2999
    }
    ,
    {
        "codigo": "11411",
        "nombre": "Redmi Note 15 Pro 5G",
        "categoria": "telefono",
        "spec1": "AMOLED de 6.83\" 1.5K",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6580 mAh",
        "precio": 3927,
        "precioOferta": 3299
    }
    ,
    {
        "codigo": "11412",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 3689,
        "precioOferta": 4199
    }
    ,
    {
        "codigo": "11407",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4599,
        "precioOferta": 4199
    }
    ,
    {
        "codigo": "11403",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4599,
        "precioOferta": 3999
    }
    ,
    {
        "codigo": "GT11407",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4599,
        "precioOferta": 3999
    }
    ,
    {
        "codigo": "11677",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4199,
        "precioOferta": 3699
    }
    ,
    {
        "codigo": "BM11677",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4199,
        "precioOferta": 3699
    }
    ,
    {
        "codigo": "BM11675",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4199,
        "precioOferta": 3699
    }
    ,
    {
        "codigo": "BM11676",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 4199,
        "precioOferta": 3699
    }
    ,
    {
        "codigo": "11676",
        "nombre": "",
        "categoria": "telefono",
        "spec1": "",
        "spec2": "",
        "spec3": "",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11675",
        "nombre": "Redmi Note 15 Pro+ 5G",
        "categoria": "telefono",
        "spec1": "AMOLED CrystalRes de 6.83\"",
        "spec2": "Cámara principal de 200 MP F1.7",
        "spec3": "Batería de 6500 mAh",
        "precio": 3689,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7623",
        "nombre": "Xiaomi LCD Writing Tablet 13.5",
        "categoria": "telefono",
        "spec1": "Pinceladas llenas de vida",
        "spec2": "Ligera y portátil",
        "spec3": "Filtra la luz azul",
        "precio": 389,
        "precioOferta": 285
    }
    ,
    {
        "codigo": "10867",
        "nombre": "Redmi 15 4G",
        "categoria": "telefono",
        "spec1": "FHD+ inmersiva de 6.9\"",
        "spec2": "Cámara principal de 50 MP F1.8",
        "spec3": "Batería de 7000 mAh",
        "precio": 1599,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10872",
        "nombre": "Redmi 15 4G",
        "categoria": "telefono",
        "spec1": "FHD+ inmersiva de 6.9\"",
        "spec2": "Cámara principal de 50 MP F1.8",
        "spec3": "Batería de 7000 mAh",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10868",
        "nombre": "Redmi 15 4G",
        "categoria": "telefono",
        "spec1": "FHD+ inmersiva de 6.9\"",
        "spec2": "Cámara principal de 50 MP F1.8",
        "spec3": "Batería de 7000 mAh",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10868",
        "nombre": "Redmi 15 4G",
        "categoria": "telefono",
        "spec1": "FHD+ inmersiva de 6.9\"",
        "spec2": "Cámara principal de 50 MP F1.8",
        "spec3": "Batería de 7000 mAh",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10867",
        "nombre": "Redmi 15 4G",
        "categoria": "telefono",
        "spec1": "FHD+ inmersiva de 6.9\"",
        "spec2": "Cámara principal de 50 MP F1.8",
        "spec3": "Batería de 7000 mAh",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11646",
        "nombre": "Redmi A7 Pro 4G",
        "categoria": "telefono",
        "spec1": "Pantalla LCD de 6,9\"",
        "spec2": "Cámara principal de 13 MP F2.2",
        "spec3": "Batería de 6000 mAh",
        "precio": 1119,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11644",
        "nombre": "Redmi A7 Pro 4G",
        "categoria": "telefono",
        "spec1": "Pantalla LCD de 6,9\"",
        "spec2": "Cámara principal de 13 MP F2.2",
        "spec3": "Batería de 6000 mAh",
        "precio": 1119,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11650",
        "nombre": "Xiaomi 17 Ultra 5G",
        "categoria": "telefono",
        "spec1": "OLED Xiaomi HyperRGB de 6.9\"",
        "spec2": "50MP 1\" | 200MP TO ! 50MP UW",
        "spec3": "Batería de 6000 mAh",
        "precio": 13499,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11647",
        "nombre": "Xiaomi 17 5G",
        "categoria": "telefono",
        "spec1": "OLED Xiaomi CrystalRes de 6.3\"",
        "spec2": "Triple Cámara 50MP Leica",
        "spec3": "Batería de 6330 mAh",
        "precio": 9299,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11648",
        "nombre": "Xiaomi 17 5G",
        "categoria": "telefono",
        "spec1": "OLED Xiaomi CrystalRes de 6.3\"",
        "spec2": "Triple Cámara 50MP Leica",
        "spec3": "Batería de 6330 mAh",
        "precio": 9299,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11720",
        "nombre": "iaomi Pad 8 Pro Gray 8GB 256GB 72106",
        "categoria": "telefono",
        "spec1": "Pantalla cristalina 11.2 800 nits",
        "spec2": "50 MP 1/2,76",
        "spec3": "9200 mAh",
        "precio": 5799,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11721",
        "nombre": "Xiaomi Pad 8 With Keyboard and Pen Gray 8GB 256GB 76183",
        "categoria": "telefono",
        "spec1": "Pantalla cristalina 11.2 800 nits",
        "spec2": "13M 1/3.06",
        "spec3": "9200mAh",
        "precio": 4999,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11115",
        "nombre": "Redmi Pad 2 WiFi",
        "categoria": "telefono",
        "spec1": "IPS LCD 11'' 600 nits",
        "spec2": "8 MP, f/2.0",
        "spec3": "9000 mAh",
        "precio": 2099,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11973",
        "nombre": "Redmi Pad 2 9.7 WiFi",
        "categoria": "telefono",
        "spec1": "2K 9,7\" 500 nits",
        "spec2": "Cámara trasera de 8 MP",
        "spec3": "7600 mAh",
        "precio": 1599,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11992",
        "nombre": "Redmi Pad 2 9.7\" LTE",
        "categoria": "telefono",
        "spec1": "2K 9,7\" 500 nits",
        "spec2": "Cámara trasera de 8 MP",
        "spec3": "7600 mAh",
        "precio": 1799,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10123",
        "nombre": "Redmi A5",
        "categoria": "telefono",
        "spec1": "LCD 6.88″ HD+ (720 × 1640)",
        "spec2": "Cámara principal de 32 MP (f/2.0)",
        "spec3": "Batería de 5200 mAh",
        "precio": 799,
        "precioOferta": 649
    }
    ,
    {
        "codigo": "6172",
        "nombre": "Xiaomi S1 Active",
        "categoria": "reloj",
        "spec1": "Deportivo y con estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,43” AMOLED",
        "precio": 849,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8024",
        "nombre": "Smart Band 8 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8284",
        "nombre": "Xiaomi Watch 2",
        "categoria": "reloj",
        "spec1": "Deportivo y con estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,43 AMOLED",
        "precio": 1999,
        "precioOferta": 1299
    }
    ,
    {
        "codigo": "8279",
        "nombre": "Xiaomi Watch S3",
        "categoria": "reloj",
        "spec1": "Deportivo y con estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,43 AMOLED",
        "precio": 1699,
        "precioOferta": 999
    }
    ,
    {
        "codigo": "8278",
        "nombre": "Redmi Watch 4",
        "categoria": "reloj",
        "spec1": "Deportivo y con estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,97” TFT 600Nits",
        "precio": 856,
        "precioOferta": 656
    }
    ,
    {
        "codigo": "8281",
        "nombre": "Smart Band 8 Pro",
        "categoria": "reloj",
        "spec1": "El deporte se conjuga con la moda",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "AMOLED rectangular de 1,74",
        "precio": 899,
        "precioOferta": 399
    }
    ,
    {
        "codigo": "8282",
        "nombre": "Smart Band 8 Pro",
        "categoria": "reloj",
        "spec1": "El deporte se conjuga con la moda",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "AMOLED rectangular de 1,74",
        "precio": 899,
        "precioOferta": 610
    }
    ,
    {
        "codigo": "7804",
        "nombre": "Redmi Watch 3 Active",
        "categoria": "reloj",
        "spec1": "Más fácil de ver",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,83” LCD 450Nits",
        "precio": 379,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8018",
        "nombre": "Xiaomi Watch 2 Pro",
        "categoria": "reloj",
        "spec1": "Deportivo y con estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,43 326ppp",
        "precio": 2899,
        "precioOferta": 1559
    }
    ,
    {
        "codigo": "6942",
        "nombre": "Smart Band 7 Pro",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,64",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7903",
        "nombre": "Smart Band 8",
        "categoria": "reloj",
        "spec1": "El deporte se conjuga con la moda",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,62",
        "precio": 506,
        "precioOferta": 367
    }
    ,
    {
        "codigo": "8965",
        "nombre": "Xiaomi Smart Band 9",
        "categoria": "reloj",
        "spec1": "Tu estilo, tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,62",
        "precio": 349,
        "precioOferta": 269
    }
    ,
    {
        "codigo": "9567",
        "nombre": "Smart Band 9 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 239,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9568",
        "nombre": "Smart Band 9 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 239,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9570",
        "nombre": "Smart Band 9 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 239,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11001",
        "nombre": "Smart Band 9 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 239,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11003",
        "nombre": "Smart Band 9 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla 1,47” TFT 247ppp",
        "precio": 239,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9271",
        "nombre": "Redmi Watch 5 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla LCD 2\"",
        "precio": 299,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9273",
        "nombre": "Redmi Watch 5 Active",
        "categoria": "reloj",
        "spec1": "Siempre active",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla LCD 2\"",
        "precio": 299,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9726",
        "nombre": "Redmi Watch 5",
        "categoria": "reloj",
        "spec1": "Da más de ti",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 2,07\"",
        "precio": 899,
        "precioOferta": 689
    }
    ,
    {
        "codigo": "9725",
        "nombre": "Redmi Watch 5",
        "categoria": "reloj",
        "spec1": "Da más de ti",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 2,07\"",
        "precio": 899,
        "precioOferta": 689
    }
    ,
    {
        "codigo": "9727",
        "nombre": "Redmi Watch 5",
        "categoria": "reloj",
        "spec1": "Da más de ti",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 2,07\"",
        "precio": 899,
        "precioOferta": 689
    }
    ,
    {
        "codigo": "9565",
        "nombre": "Xiaomi Smart Band 9 Pro",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,74\"",
        "precio": 799,
        "precioOferta": 399
    }
    ,
    {
        "codigo": "9566",
        "nombre": "Xiaomi Smart Band 9 Pro",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,74\"",
        "precio": 799,
        "precioOferta": 399
    }
    ,
    {
        "codigo": "9569",
        "nombre": "Xiaomi Smart Band 9 Pro",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,74\"",
        "precio": 799,
        "precioOferta": 399
    }
    ,
    {
        "codigo": "9272",
        "nombre": "Redmi Watch 5 Lite",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,96\"",
        "precio": 479,
        "precioOferta": 409
    }
    ,
    {
        "codigo": "9274",
        "nombre": "Redmi Watch 5 Lite",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,96\"",
        "precio": 479,
        "precioOferta": 409
    }
    ,
    {
        "codigo": "GT9272",
        "nombre": "Redmi Watch 5 Lite",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,96\"",
        "precio": 479,
        "precioOferta": 409
    }
    ,
    {
        "codigo": "GT9274",
        "nombre": "Redmi Watch 5 Lite",
        "categoria": "reloj",
        "spec1": "A tu estilo, a tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,96\"",
        "precio": 479,
        "precioOferta": 409
    }
    ,
    {
        "codigo": "9860",
        "nombre": "Xiaomi Watch S4",
        "categoria": "reloj",
        "spec1": "Mejora tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,43\"",
        "precio": 1599,
        "precioOferta": 1249
    }
    ,
    {
        "codigo": "10550",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10551",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10552",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10551",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10550",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10552",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10553",
        "nombre": "Xiaomi Smart Band 10",
        "categoria": "reloj",
        "spec1": "Encuentra tu estilo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1,72\"",
        "precio": 449,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10977",
        "nombre": "Xiaomi Watch S4 41mm",
        "categoria": "reloj",
        "spec1": "Tu estilo, tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED de 1,32\"",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10978",
        "nombre": "Xiaomi Watch S4 41mm",
        "categoria": "reloj",
        "spec1": "Tu estilo, tu ritmo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED de 1,32\"",
        "precio": 1399,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11603",
        "nombre": "Xiaomi Watch 5",
        "categoria": "reloj",
        "spec1": "Cada vez más inteligente",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED de 1,54\"",
        "precio": 2599,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11604",
        "nombre": "Xiaomi Watch 5",
        "categoria": "reloj",
        "spec1": "Cada vez más inteligente",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED de 1,54\"",
        "precio": 2599,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11604",
        "nombre": "Xiaomi Watch 5",
        "categoria": "reloj",
        "spec1": "Cada vez más inteligente",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED de 1,54\"",
        "precio": 2599,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11837",
        "nombre": "Xiaomi Watch S5 46mm",
        "categoria": "reloj",
        "spec1": "Tu estilo, siempre a tiempo",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 1.48",
        "precio": 1699,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11876",
        "nombre": "Redmi Watch 6",
        "categoria": "reloj",
        "spec1": "Nitidez Cristalina",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Pantalla AMOLED 2.07",
        "precio": 949,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11846",
        "nombre": "Xiaomi Smart Band 10 Pro",
        "categoria": "reloj",
        "spec1": "Sigue en forma, ve más allá",
        "spec2": "Smartwatch Xiaomi",
        "spec3": "Xiaomi Smart Band 10 Pro",
        "precio": 749,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6940",
        "nombre": "Redmi Buds 4 Pro",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de sonido Hi-Fi",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8274",
        "nombre": "Redmi Buds 5 Pro",
        "categoria": "audifonos",
        "spec1": "Tu música y tú",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8927",
        "nombre": "Xiaomi OpenWear Stereo",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Audio de alta resolución LHDC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8928",
        "nombre": "Xiaomi OpenWear Stereo",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Audio de alta resolución LHDC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8271",
        "nombre": "Redmi Buds 5",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9723",
        "nombre": "Redmi Buds 6 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9724",
        "nombre": "Redmi Buds 6 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9722",
        "nombre": "Redmi Buds 6 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9690",
        "nombre": "Redmi Buds 6",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9720",
        "nombre": "Redmi Buds 6",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9721",
        "nombre": "Redmi Buds 6",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9068",
        "nombre": "Redmi Buds 6 Lite",
        "categoria": "audifonos",
        "spec1": "El sonido que buscas",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12,4mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11606",
        "nombre": "Redmi Buds 8 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11607",
        "nombre": "Redmi Buds 8 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11605",
        "nombre": "Redmi Buds 8 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11606",
        "nombre": "Redmi Buds 8 Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad sin límites",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Calidad de Sonido LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9109",
        "nombre": "Redmi Buds 6 Active",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 14 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9110",
        "nombre": "Redmi Buds 6 Active",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 14 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9084",
        "nombre": "Redmi Buds 6 Active",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 14 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9112",
        "nombre": "Redmi Buds 6 Active",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 14 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9247",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9248",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9249",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9246",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9248",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9249",
        "nombre": "Redmu Buds 6 Play",
        "categoria": "audifonos",
        "spec1": "Ritmo a tu manera",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 10 MM",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8964",
        "nombre": "Xiaomi Buds 5",
        "categoria": "audifonos",
        "spec1": "Sonido puro, comodidad pura",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9064",
        "nombre": "Xiaomi Buds 5",
        "categoria": "audifonos",
        "spec1": "Sonido puro, comodidad pura",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9065",
        "nombre": "Xiaomi Buds 5",
        "categoria": "audifonos",
        "spec1": "Sonido puro, comodidad pura",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9957",
        "nombre": "Xiaomi Buds 5 BT",
        "categoria": "audifonos",
        "spec1": "Diferencia que se nota",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9958",
        "nombre": "Xiaomi Buds 5 BT",
        "categoria": "audifonos",
        "spec1": "Diferencia que se nota",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9959",
        "nombre": "Xiaomi Buds 5 BT|WIFI",
        "categoria": "audifonos",
        "spec1": "Diferencia que se nota",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Qualcomm® XPAN - WIFI*",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10981",
        "nombre": "Xiaomi OpenWear Stereo Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad de diseño abierto",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX. LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10983",
        "nombre": "Xiaomi OpenWear Stereo Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad de diseño abierto",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX. LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10982",
        "nombre": "Xiaomi OpenWear Stereo Pro",
        "categoria": "audifonos",
        "spec1": "Comodidad de diseño abierto",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Harman AudioEFX. LDAC",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11399",
        "nombre": "Redmi Buds 8 Lite",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11400",
        "nombre": "Redmi Buds 8 Lite",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11401",
        "nombre": "Redmi Buds 8 Lite",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11399",
        "nombre": "Redmi Buds 8 Lite",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11401",
        "nombre": "Redmi Buds 8 Lite",
        "categoria": "audifonos",
        "spec1": "El ritmo de tu vida",
        "spec2": "Audífonos Bluetooth",
        "spec3": "Diafragma 12mm titanio",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3389",
        "nombre": "85",
        "categoria": "ecosistema",
        "spec1": "49",
        "spec2": "85",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3390",
        "nombre": "45",
        "categoria": "ecosistema",
        "spec1": "32",
        "spec2": "45",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3423",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3424",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "60",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3425",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "60",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3426",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "60",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3434",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "99",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3455",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "39",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3457",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "39",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3508",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "65",
        "spec2": "149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3533",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "219",
        "spec2": "499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3534",
        "nombre": "39",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "39",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3657",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "499",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3723",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "49",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3726",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "65",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3832",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3833",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3858",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "89",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3866",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3868",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "69",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3917",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "3973",
        "nombre": "475",
        "categoria": "ecosistema",
        "spec1": "329",
        "spec2": "535",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4157",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4181",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "629",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4182",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "629",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4185",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "629",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4193",
        "nombre": "395",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "395",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4235",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4325",
        "nombre": "134",
        "categoria": "ecosistema",
        "spec1": "99",
        "spec2": "194",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4327",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "349",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4329",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4331",
        "nombre": "215",
        "categoria": "ecosistema",
        "spec1": "149",
        "spec2": "275",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4748",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4749",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4750",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4753",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4755",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "319",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4757",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "99",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4758",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "89",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4760",
        "nombre": "189",
        "categoria": "ecosistema",
        "spec1": "149",
        "spec2": "249",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4762",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "69",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4766",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "298.9952",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4785",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4787",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4842",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4877",
        "nombre": "665",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "725",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4890",
        "nombre": "35",
        "categoria": "ecosistema",
        "spec1": "23",
        "spec2": "35",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4910",
        "nombre": "4999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5339",
        "spec3": "340",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4941",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "1599",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4996",
        "nombre": "60",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "60",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4998",
        "nombre": "16999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "17339",
        "spec3": "340",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "4999",
        "nombre": "85",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "85",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5000",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "15",
        "spec2": "229",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5001",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "248.9984",
        "spec2": "419",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5058",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5064",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5072",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5073",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "509",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5077",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5079",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "749",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5102",
        "nombre": "255",
        "categoria": "ecosistema",
        "spec1": "124",
        "spec2": "315",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5176",
        "nombre": "749",
        "categoria": "ecosistema",
        "spec1": "699",
        "spec2": "809",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5186",
        "nombre": "39",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "39",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5199",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5202",
        "nombre": "95",
        "categoria": "ecosistema",
        "spec1": "79",
        "spec2": "95",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5203",
        "nombre": "375",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "435",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5204",
        "nombre": "125",
        "categoria": "ecosistema",
        "spec1": "79",
        "spec2": "125",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5205",
        "nombre": "49",
        "categoria": "ecosistema",
        "spec1": "39",
        "spec2": "49",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5206",
        "nombre": "3199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3444",
        "spec3": "245",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5220",
        "nombre": "39",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "39",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5226",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5234",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5236",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5237",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5258",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1509",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5299",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "499",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5301",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5303",
        "nombre": "75",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "75",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5304",
        "nombre": "669",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "669",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5305",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "369",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5324",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5325",
        "nombre": "125",
        "categoria": "ecosistema",
        "spec1": "85",
        "spec2": "125",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5328",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5329",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5330",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5340",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5366",
        "nombre": "459",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "519",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5465",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5469",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "319",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5574",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5575",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5576",
        "nombre": "6999",
        "categoria": "ecosistema",
        "spec1": "5799",
        "spec2": "7199",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5577",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "129",
        "spec2": "299",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5593",
        "nombre": "1549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5596",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5597",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "75",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5612",
        "nombre": "112",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "112",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5613",
        "nombre": "112",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "112",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5619",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5645",
        "nombre": "2699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5739",
        "nombre": "1169",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1279",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5740",
        "nombre": "4499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4699",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5741",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "2898.9968",
        "spec2": "3949",
        "spec3": "250",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5742",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3949",
        "spec3": "250",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5744",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1999",
        "spec2": "2259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5747",
        "nombre": "529",
        "categoria": "ecosistema",
        "spec1": "499.0048",
        "spec2": "589",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5761",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "298.9952",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5762",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "349",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5765",
        "nombre": "429",
        "categoria": "ecosistema",
        "spec1": "329",
        "spec2": "489",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5809",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "699",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5818",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5839",
        "nombre": "1715",
        "categoria": "ecosistema",
        "spec1": "1407",
        "spec2": "1828",
        "spec3": "113",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5844",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "471",
        "spec3": "112",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5878",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5897",
        "nombre": "529",
        "categoria": "ecosistema",
        "spec1": "489",
        "spec2": "589",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5898",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5899",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "449",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5900",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "134",
        "spec2": "179",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5978",
        "nombre": "112",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "112",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6014",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6016",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6021",
        "nombre": "4299",
        "categoria": "ecosistema",
        "spec1": "2999",
        "spec2": "4299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6025",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6077",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6161",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "598.9984",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6162",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "598.9984",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6171",
        "nombre": "849",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "849",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6172",
        "nombre": "849",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "849",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6177",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "849",
        "spec2": "1499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6178",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6179",
        "nombre": "795",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "855",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6180",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6181",
        "nombre": "319",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "379",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6182",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6183",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6184",
        "nombre": "659",
        "categoria": "ecosistema",
        "spec1": "459",
        "spec2": "719",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6185",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6186",
        "nombre": "345",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "405",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6187",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "509",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6188",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "699",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6189",
        "nombre": "410",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "410",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6190",
        "nombre": "410",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "410",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6246",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6328",
        "nombre": "1949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1949",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6329",
        "nombre": "1949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1949",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6366",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6374",
        "nombre": "3799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3909",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6376",
        "nombre": "1049",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "1109",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6377",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "319",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6378",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6379",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "599",
        "spec2": "959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6380",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6408",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6423",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "285",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6424",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "394",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6431",
        "nombre": "649",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "649",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6470",
        "nombre": "112",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "112",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6474",
        "nombre": "1172",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1172",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6475",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6492",
        "nombre": "998.9952",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "998.9952",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6493",
        "nombre": "1172",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1172",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6509",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6510",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6511",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "255",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6512",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6513",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "455",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6514",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "1998.9984",
        "spec2": "3544",
        "spec3": "245",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6526",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6718",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "179",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6721",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "449",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6724",
        "nombre": "305",
        "categoria": "ecosistema",
        "spec1": "245",
        "spec2": "365",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6725",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6727",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6729",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6730",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6731",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "88.9952",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6738",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "248.9984",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6797",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6798",
        "nombre": "2999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6801",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6802",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6805",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6841",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "39",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6857",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6899",
        "nombre": "125",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "125",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6936",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6940",
        "nombre": "535",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "535",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6941",
        "nombre": "535",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "535",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6942",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6943",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6944",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6945",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "159",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6948",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6951",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6952",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "121",
        "spec2": "179",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6955",
        "nombre": "215",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "275",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6956",
        "nombre": "995",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1055",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6958",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6959",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6960",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "285",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6969",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6971",
        "nombre": "5399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5739",
        "spec3": "340",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6972",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6973",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "75",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6974",
        "nombre": "395",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "395",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6976",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3839",
        "spec3": "140",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7010",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7080",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7106",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "649",
        "spec2": "1009",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7107",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7108",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7115",
        "nombre": "295",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "295",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7116",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "749",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7117",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "439",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7120",
        "nombre": "295",
        "categoria": "ecosistema",
        "spec1": "165",
        "spec2": "295",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7121",
        "nombre": "269",
        "categoria": "ecosistema",
        "spec1": "169",
        "spec2": "269",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7122",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7123",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "359",
        "spec2": "509",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7124",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "29",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7125",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "29",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7127",
        "nombre": "829",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "889",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7129",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "239",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7132",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "349",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7144",
        "nombre": "389",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7147",
        "nombre": "345",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "345",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7166",
        "nombre": "1169",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1169",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7167",
        "nombre": "1169",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1169",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7168",
        "nombre": "1169",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1169",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7169",
        "nombre": "1195",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1195",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7170",
        "nombre": "1195",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1195",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7187",
        "nombre": "5999",
        "categoria": "ecosistema",
        "spec1": "3599",
        "spec2": "6199",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7212",
        "nombre": "95",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "95",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7219",
        "nombre": "95",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "95",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7223",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7243",
        "nombre": "59",
        "categoria": "ecosistema",
        "spec1": "49",
        "spec2": "59",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7324",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7325",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7326",
        "nombre": "145",
        "categoria": "ecosistema",
        "spec1": "98.9968",
        "spec2": "145",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7327",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7328",
        "nombre": "759",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "759",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7348",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7349",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7386",
        "nombre": "9326.0018",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "9326.0018",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7387",
        "nombre": "1199.0003",
        "categoria": "ecosistema",
        "spec1": "861.9968",
        "spec2": "1199.0003",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7388",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7389",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7392",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7393",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7394",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7395",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7396",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7398",
        "nombre": "649",
        "categoria": "ecosistema",
        "spec1": "486.9984",
        "spec2": "649",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7399",
        "nombre": "648.9952",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "648.9952",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7400",
        "nombre": "649",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "649",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7401",
        "nombre": "749",
        "categoria": "ecosistema",
        "spec1": "648.9952",
        "spec2": "749",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7403",
        "nombre": "749",
        "categoria": "ecosistema",
        "spec1": "648.9952",
        "spec2": "749",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7425",
        "nombre": "1249.0016",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1249.0016",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7429",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2309",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7455",
        "nombre": "4299",
        "categoria": "ecosistema",
        "spec1": "3199",
        "spec2": "4409",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7532",
        "nombre": "1598",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1598",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7533",
        "nombre": "1749",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1749",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7534",
        "nombre": "1749",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1749",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7593",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7610",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7611",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7613",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7614",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7619",
        "nombre": "2349",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2459",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7621",
        "nombre": "9999",
        "categoria": "ecosistema",
        "spec1": "5999",
        "spec2": "9999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7623",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "289",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7624",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7626",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7627",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7628",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7629",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "69",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7630",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7631",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7632",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7642",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "319",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7643",
        "nombre": "2299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7644",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7646",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "255",
        "spec2": "419",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7647",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7649",
        "nombre": "95",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "95",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7650",
        "nombre": "5695",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5835",
        "spec3": "140",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7652",
        "nombre": "995",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "995",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7654",
        "nombre": "125",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "125",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7655",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7656",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7743",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7756",
        "nombre": "2699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7760",
        "nombre": "2599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7795",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7796",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7797",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "69",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7799",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7800",
        "nombre": "1149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7801",
        "nombre": "1149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7804",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "379",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7805",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "379",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7806",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7807",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7838",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7839",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7840",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7841",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7881",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7882",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7901",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "521",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7902",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7903",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "310",
        "spec2": "509",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7904",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7905",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "249",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7906",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "179",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7907",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "179",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7908",
        "nombre": "160",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "160",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7910",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "2999",
        "spec2": "4249",
        "spec3": "250",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7918",
        "nombre": "189",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "189",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7919",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7920",
        "nombre": "245",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "245",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7921",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7922",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "249",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7923",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7924",
        "nombre": "619",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "679",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7925",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "609",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7928",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8014",
        "nombre": "1248",
        "categoria": "ecosistema",
        "spec1": "1199.0048",
        "spec2": "1248",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8018",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "1559",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8019",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "1559",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8021",
        "nombre": "219",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "219",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8047",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8049",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8050",
        "nombre": "1595",
        "categoria": "ecosistema",
        "spec1": "949",
        "spec2": "1595",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8051",
        "nombre": "245",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "245",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8052",
        "nombre": "160",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "160",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8054",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "249",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8124",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "74",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8125",
        "nombre": "969",
        "categoria": "ecosistema",
        "spec1": "849",
        "spec2": "1029",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8126",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "629",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8175",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8185",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8186",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8187",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8188",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8189",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8190",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8235",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8239",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8240",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8241",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8242",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "3299",
        "spec2": "3999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8243",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8271",
        "nombre": "289",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "289",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8272",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "289",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8273",
        "nombre": "289",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "289",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8274",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8275",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8276",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8277",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "599",
        "spec2": "699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8278",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "599",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8279",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8280",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8281",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8282",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "610",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8283",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8284",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8333",
        "nombre": "5899",
        "categoria": "ecosistema",
        "spec1": "3999",
        "spec2": "5899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8334",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3544",
        "spec3": "245",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8577",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8585",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8598",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8600",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8601",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8602",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8605",
        "nombre": "325",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "385",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8608",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8642",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8670",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8712",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "3295",
        "spec2": "4109",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8714",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "699",
        "spec2": "909",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8715",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "1109",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8716",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1209",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8717",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "285",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8719",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8721",
        "nombre": "469",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "469",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8723",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "339",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8725",
        "nombre": "495",
        "categoria": "ecosistema",
        "spec1": "449",
        "spec2": "555",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8727",
        "nombre": "689",
        "categoria": "ecosistema",
        "spec1": "598.9984",
        "spec2": "749",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8728",
        "nombre": "535",
        "categoria": "ecosistema",
        "spec1": "449",
        "spec2": "595",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8729",
        "nombre": "1329",
        "categoria": "ecosistema",
        "spec1": "1295",
        "spec2": "1389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8730",
        "nombre": "450",
        "categoria": "ecosistema",
        "spec1": "349",
        "spec2": "510",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8731",
        "nombre": "450",
        "categoria": "ecosistema",
        "spec1": "349",
        "spec2": "510",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8732",
        "nombre": "450",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "510",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8733",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "149",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8768",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8769",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8770",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8774",
        "nombre": "625",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "685",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8796",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8797",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "949",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8799",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "949",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8800",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8801",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8803",
        "nombre": "2699",
        "categoria": "ecosistema",
        "spec1": "2499",
        "spec2": "2699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8804",
        "nombre": "2699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8805",
        "nombre": "2699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8811",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "104",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8812",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8813",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "229",
        "spec2": "409",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8814",
        "nombre": "385",
        "categoria": "ecosistema",
        "spec1": "299",
        "spec2": "445",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8815",
        "nombre": "369",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "429",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8816",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8817",
        "nombre": "6999",
        "categoria": "ecosistema",
        "spec1": "4299",
        "spec2": "7139",
        "spec3": "140",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8823",
        "nombre": "60",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "60",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8825",
        "nombre": "375",
        "categoria": "ecosistema",
        "spec1": "279",
        "spec2": "435",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8826",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "329",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8830",
        "nombre": "2399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2509",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8831",
        "nombre": "3799",
        "categoria": "ecosistema",
        "spec1": "3299",
        "spec2": "3909",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8832",
        "nombre": "6599",
        "categoria": "ecosistema",
        "spec1": "4699",
        "spec2": "6799",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8833",
        "nombre": "7699",
        "categoria": "ecosistema",
        "spec1": "5899",
        "spec2": "7899",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8899",
        "nombre": "979",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "1039",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8900",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "549",
        "spec2": "739",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10972",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8969",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9285",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "60",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8965",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "349",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8966",
        "nombre": "349",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "349",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8967",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8968",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9048",
        "nombre": "2999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3109",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9050",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9051",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9053",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "949",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9054",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "1049",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9056",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "1399",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9057",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1399",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9058",
        "nombre": "39",
        "categoria": "ecosistema",
        "spec1": "19",
        "spec2": "39",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9059",
        "nombre": "29",
        "categoria": "ecosistema",
        "spec1": "23",
        "spec2": "29",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9060",
        "nombre": "59",
        "categoria": "ecosistema",
        "spec1": "39",
        "spec2": "59",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9062",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4109",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8964",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9064",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9066",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "269",
        "spec2": "399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9067",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9068",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9069",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "159",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9072",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "2499",
        "spec2": "3959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9073",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "2499",
        "spec2": "3959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9074",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "1496",
        "spec2": "3359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9075",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "1496",
        "spec2": "3359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9076",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "149",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9109",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "149",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9110",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "139",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9139",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9140",
        "nombre": "529",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "589",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9141",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9143",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "169",
        "spec2": "289",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9144",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "189",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9146",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9148",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9149",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "664",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9150",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9151",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "139",
        "spec2": "239",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9152",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "75",
        "spec2": "159",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9153",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "109",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9154",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "229",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9155",
        "nombre": "629",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "629",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9157",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "69",
        "spec2": "159",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9158",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "699.0032",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9160",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9170",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9171",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9228",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9229",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "279",
        "spec2": "435",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9230",
        "nombre": "779",
        "categoria": "ecosistema",
        "spec1": "689",
        "spec2": "839",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9236",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "394",
        "spec2": "535",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9237",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9238",
        "nombre": "179",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9239",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9240",
        "nombre": "2499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9241",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9247",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "95",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9248",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9249",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "95",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9268",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "59.0016",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9269",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9960",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9961",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9271",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9276",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9277",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9278",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9279",
        "nombre": "5499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9280",
        "nombre": "4299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9281",
        "nombre": "4299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9282",
        "nombre": "4299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9283",
        "nombre": "10999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "10999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9287",
        "nombre": "103.82",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "103.82",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9328",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "55",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9329",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "55",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9330",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9331",
        "nombre": "5499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9332",
        "nombre": "5609",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5609",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9333",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "1199",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9361",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "939",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9362",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "939",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9363",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "939",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9364",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9365",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9366",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9479",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "139",
        "spec2": "195",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9485",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "355",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9488",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "64",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9489",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "649",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9490",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "699",
        "spec2": "959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9491",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "95",
        "spec2": "179",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9492",
        "nombre": "689",
        "categoria": "ecosistema",
        "spec1": "659",
        "spec2": "749",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9495",
        "nombre": "279",
        "categoria": "ecosistema",
        "spec1": "169",
        "spec2": "279",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9496",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "219",
        "spec2": "355",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9499",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9501",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "499",
        "spec2": "609",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9502",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "539",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9503",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "509",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9506",
        "nombre": "489",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "549",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9508",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "589",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9512",
        "nombre": "829",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "889",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9513",
        "nombre": "699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "759",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9515",
        "nombre": "234",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "294",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9517",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9518",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "88.9952",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9519",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9524",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "449",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9565",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9566",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9567",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9568",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9569",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "399",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9570",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9571",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9572",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "319",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9573",
        "nombre": "2109",
        "categoria": "ecosistema",
        "spec1": "1129",
        "spec2": "2109",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9574",
        "nombre": "2849",
        "categoria": "ecosistema",
        "spec1": "2799",
        "spec2": "2909",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9589",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "1199",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9590",
        "nombre": "5499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9601",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "219",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9602",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "219",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9634",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9677",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "1099",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9678",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "1099",
        "spec2": "1199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9689",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "129",
        "spec2": "149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9690",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "339",
        "spec2": "379",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9720",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "339",
        "spec2": "379",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9721",
        "nombre": "379",
        "categoria": "ecosistema",
        "spec1": "339",
        "spec2": "379",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9722",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "459",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9723",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "459",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9724",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "459",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9273",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9272",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "409",
        "spec2": "479",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9274",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "409",
        "spec2": "479",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9798",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9792",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10579",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9793",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9792",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9793",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9798",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1274",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9741",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9740",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9739",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9739",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1598",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9740",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1598",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9741",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1598",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9964",
        "nombre": "1998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "gt9963",
        "nombre": "1998",
        "categoria": "ecosistema",
        "spec1": "1599",
        "spec2": "1998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9963",
        "nombre": "1998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9965",
        "nombre": "1998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9738",
        "nombre": "1998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9799",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "1239",
        "spec2": "1559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9835",
        "nombre": "4499",
        "categoria": "ecosistema",
        "spec1": "4299",
        "spec2": "4499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9860",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1249",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9861",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9862",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1049",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9863",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9865",
        "nombre": "849",
        "categoria": "ecosistema",
        "spec1": "769",
        "spec2": "849",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9864",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9867",
        "nombre": "295",
        "categoria": "ecosistema",
        "spec1": "179",
        "spec2": "355",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9868",
        "nombre": "210",
        "categoria": "ecosistema",
        "spec1": "144",
        "spec2": "210",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9869",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "109",
        "spec2": "219",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9870",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "129",
        "spec2": "219",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9874",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "309",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9875",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "319",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9876",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "319",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9878",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "79",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9879",
        "nombre": "369",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "429",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9884",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "229",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9885",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9894",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "249",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9903",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "89",
        "spec2": "159",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9905",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "89",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9906",
        "nombre": "159",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "159",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9736",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9794",
        "nombre": "2299",
        "categoria": "ecosistema",
        "spec1": "2098",
        "spec2": "2299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9795",
        "nombre": "2299",
        "categoria": "ecosistema",
        "spec1": "2098",
        "spec2": "2299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9065",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "799",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9957",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "1349",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9958",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10112",
        "nombre": "579",
        "categoria": "ecosistema",
        "spec1": "499",
        "spec2": "639",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10115",
        "nombre": "245",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "245",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10377",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1009",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10504",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "139",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10505",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10511",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10512",
        "nombre": "749",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "809",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10550",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10669",
        "nombre": "1129",
        "categoria": "ecosistema",
        "spec1": "959",
        "spec2": "1189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10779",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "199",
        "spec2": "299",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10783",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10974",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10977",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7215",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9242",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9859",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "89",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9890",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "54",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9866",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9877",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "79",
        "spec2": "159",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9904",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7423",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9494",
        "nombre": "189",
        "categoria": "ecosistema",
        "spec1": "99",
        "spec2": "189",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5810",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9084",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9112",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "139",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9873",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11001",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11003",
        "nombre": "239",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "239",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9482",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "289",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9486",
        "nombre": "279",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "339",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10513",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7622",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9902",
        "nombre": "419",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "479",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10551",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "394",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10552",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9272",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "409",
        "spec2": "479",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9483",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "549",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9871",
        "nombre": "599",
        "categoria": "ecosistema",
        "spec1": "499",
        "spec2": "659",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9507",
        "nombre": "729",
        "categoria": "ecosistema",
        "spec1": "599",
        "spec2": "729",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9487",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "749",
        "spec2": "959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9061",
        "nombre": "1049",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1159",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9161",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10978",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8713",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "1299",
        "spec2": "1509",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10117",
        "nombre": "11499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "11499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11022",
        "nombre": "5198",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5198",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9481",
        "nombre": "6495",
        "categoria": "ecosistema",
        "spec1": "5995",
        "spec2": "6639",
        "spec3": "144",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9480",
        "nombre": "5995",
        "categoria": "ecosistema",
        "spec1": "5299",
        "spec2": "6135",
        "spec3": "140",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9886",
        "nombre": "3099",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9888",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "3749",
        "spec2": "3999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11023",
        "nombre": "5198",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5198",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10118",
        "nombre": "11499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "11499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9796",
        "nombre": "2299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10879",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11021",
        "nombre": "5199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9974",
        "nombre": "3599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9889",
        "nombre": "5499",
        "categoria": "ecosistema",
        "spec1": "4999",
        "spec2": "5499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10867",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11019",
        "nombre": "6499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "6499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11020",
        "nombre": "6499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "6499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9913",
        "nombre": "2599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11024",
        "nombre": "6499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "6499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10462",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1499",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9897",
        "nombre": "7999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "7999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10876",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9736",
        "nombre": "2399",
        "categoria": "ecosistema",
        "spec1": "1998",
        "spec2": "2399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10127",
        "nombre": "898",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "898",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10876",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11026",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9972",
        "nombre": "3599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10508",
        "nombre": "3799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10509",
        "nombre": "5299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10462",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1499",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9971",
        "nombre": "3599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10122",
        "nombre": "7599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "7599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8824",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "849",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9737",
        "nombre": "2399",
        "categoria": "ecosistema",
        "spec1": "1998",
        "spec2": "2399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10872",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9738",
        "nombre": "2399",
        "categoria": "ecosistema",
        "spec1": "1998",
        "spec2": "2399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10727",
        "nombre": "2598",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2598",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9731",
        "nombre": "2598",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2598",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10507",
        "nombre": "2599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2709",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10128",
        "nombre": "898",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "898",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10126",
        "nombre": "898",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "898",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9732",
        "nombre": "2598",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2598",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9730",
        "nombre": "2998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9911",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1509",
        "spec3": "110",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9361",
        "nombre": "939",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "939",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10123",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "649",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9735",
        "nombre": "2998",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2998",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10124",
        "nombre": "798",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "798",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9901",
        "nombre": "5579",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5779",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9731",
        "nombre": "2999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9887",
        "nombre": "6499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "6499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10129",
        "nombre": "1119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9732",
        "nombre": "2999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9900",
        "nombre": "4399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4599",
        "spec3": "200",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10121",
        "nombre": "7599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "7599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9733",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "2998",
        "spec2": "3699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9734",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9735",
        "nombre": "3699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9968",
        "nombre": "2249.0048",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2249.0048",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9939",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9940",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "3498",
        "spec2": "3899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9941",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "3899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9967",
        "nombre": "2249.0048",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2249.0048",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10125",
        "nombre": "798",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "798",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8237",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9159",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10868",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9244",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9245",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7323",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "6516",
        "nombre": "279",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "279",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5198",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "419",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8822",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9872",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8829",
        "nombre": "39",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "39",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8604",
        "nombre": "189",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "189",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7109",
        "nombre": "144",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "204",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10431",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10666",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10702",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10778",
        "nombre": "6499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "6499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10780",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8970",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8809",
        "nombre": "69",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "69",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8048",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "149",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9243",
        "nombre": "529",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "589",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9959",
        "nombre": "2099",
        "categoria": "ecosistema",
        "spec1": "1469",
        "spec2": "2099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9286",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "60",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10858",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "49",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11009",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "95",
        "spec2": "189",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10866",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10865",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "129",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10837",
        "nombre": "189",
        "categoria": "ecosistema",
        "spec1": "135",
        "spec2": "249",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8810",
        "nombre": "229",
        "categoria": "ecosistema",
        "spec1": "165",
        "spec2": "289",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10836",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10831",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "959",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11004",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10726",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "609",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11005",
        "nombre": "569",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "629",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8927",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "899",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11399",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10860",
        "nombre": "249",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "249",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "5300",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "249",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11010",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11008",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11018",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10832",
        "nombre": "529",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "529",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10835",
        "nombre": "459",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "519",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11006",
        "nombre": "329",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "389",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11013",
        "nombre": "499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "559",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11400",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11012",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1199",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11120",
        "nombre": "259",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "259",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11606",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11607",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11605",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11401",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9246",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11413",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "2399",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11402",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "2999",
        "spec2": "3599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11677",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "4199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9135",
        "nombre": "549",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "609",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11603",
        "nombre": "2599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10861",
        "nombre": "79",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "79",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10862",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10859",
        "nombre": "129",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "129",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9248",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11007",
        "nombre": "9499",
        "categoria": "ecosistema",
        "spec1": "6499",
        "spec2": "9635",
        "spec3": "136",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11399",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT8733",
        "nombre": "149",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "209",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10776",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1599",
        "spec2": "2259",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10879",
        "nombre": "1099",
        "categoria": "ecosistema",
        "spec1": "999",
        "spec2": "1099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9274",
        "nombre": "479",
        "categoria": "ecosistema",
        "spec1": "409",
        "spec2": "479",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11401",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT9249",
        "nombre": "119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11109",
        "nombre": "3999",
        "categoria": "ecosistema",
        "spec1": "3199",
        "spec2": "4059",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10783",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "859",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "BM11677",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "4199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9725",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "689",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10875",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11417",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1699",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11413",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "2299",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11606",
        "nombre": "679",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "679",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11900",
        "nombre": "7700",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "7700",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11418",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1699",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10985",
        "nombre": "10499",
        "categoria": "ecosistema",
        "spec1": "7399",
        "spec2": "11003",
        "spec3": "504",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11643",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10551",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10550",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10552",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11418",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1699",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7633",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9895",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11419",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1699",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11419",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1699",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11545",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1499",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10123",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10124",
        "nombre": "799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11604",
        "nombre": "2651",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2651",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11404",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "2299",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11608",
        "nombre": "169",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "229",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11545",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "1499",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11406",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1799",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11604",
        "nombre": "2599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10707",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1599",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9163",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9164",
        "nombre": "1999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10868",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11113",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11408",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1799",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11646",
        "nombre": "1119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10707",
        "nombre": "1899",
        "categoria": "ecosistema",
        "spec1": "1599",
        "spec2": "1899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11532",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1605",
        "spec3": "106",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10874",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "1049",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11644",
        "nombre": "1119",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1119",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11416",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1799",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11118",
        "nombre": "299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "359",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11406",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1799",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9523",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "8928",
        "nombre": "1299",
        "categoria": "ecosistema",
        "spec1": "929",
        "spec2": "1299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11267",
        "nombre": "139",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "139",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11416",
        "nombre": "2199",
        "categoria": "ecosistema",
        "spec1": "1799",
        "spec2": "2199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11650",
        "nombre": "13499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "13499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "BM11675",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "4199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10668",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11410",
        "nombre": "2499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11531",
        "nombre": "1199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1305",
        "spec3": "106",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10553",
        "nombre": "449",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11410",
        "nombre": "2499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10975",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10976",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11115",
        "nombre": "2099",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10864",
        "nombre": "450",
        "categoria": "ecosistema",
        "spec1": "365",
        "spec2": "510",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11111",
        "nombre": "2099",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2099",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7488",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9284",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9633",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9726",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "689",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9727",
        "nombre": "899",
        "categoria": "ecosistema",
        "spec1": "689",
        "spec2": "899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "BM11676",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "4199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11544",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "2999",
        "spec2": "3899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10981",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9632",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10812",
        "nombre": "11499",
        "categoria": "ecosistema",
        "spec1": "10489",
        "spec2": "11499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11676",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT10867",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10777",
        "nombre": "999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10863",
        "nombre": "450",
        "categoria": "ecosistema",
        "spec1": "365",
        "spec2": "510",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11409",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "2299",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11422",
        "nombre": "2499",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11647",
        "nombre": "9299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "9299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11404",
        "nombre": "2899",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9520",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9521",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9522",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11122",
        "nombre": "2895",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "2899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "9955",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10829",
        "nombre": "17999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "17999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11011",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11015",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11016",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11017",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11648",
        "nombre": "9299",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "9299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11675",
        "nombre": "4199",
        "categoria": "ecosistema",
        "spec1": "3699",
        "spec2": "3689",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7487",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7489",
        "nombre": "0",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "0",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11405",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "2599",
        "spec2": "2999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11412",
        "nombre": "4599",
        "categoria": "ecosistema",
        "spec1": "3999",
        "spec2": "3689",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11420",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "2599",
        "spec2": "3299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11470",
        "nombre": "5899",
        "categoria": "ecosistema",
        "spec1": "4499",
        "spec2": "5899",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10983",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10982",
        "nombre": "1399",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1399",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10833",
        "nombre": "99",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "99",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11407",
        "nombre": "4599",
        "categoria": "ecosistema",
        "spec1": "3999",
        "spec2": "4599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11403",
        "nombre": "4599",
        "categoria": "ecosistema",
        "spec1": "3999",
        "spec2": "4599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "GT11407",
        "nombre": "4599",
        "categoria": "ecosistema",
        "spec1": "3999",
        "spec2": "4599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11420",
        "nombre": "3299",
        "categoria": "ecosistema",
        "spec1": "2599",
        "spec2": "3299",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11411",
        "nombre": "3899",
        "categoria": "ecosistema",
        "spec1": "2999",
        "spec2": "3927",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7143",
        "nombre": "89",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "89",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "7105",
        "nombre": "399",
        "categoria": "ecosistema",
        "spec1": "219",
        "spec2": "459",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11720",
        "nombre": "5799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "5799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11721",
        "nombre": "4999",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "4999",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11523",
        "nombre": "389",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "449",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11513",
        "nombre": "209",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "269",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11876",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "949",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11837",
        "nombre": "1699",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1699",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11846",
        "nombre": "749",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "749",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11973",
        "nombre": "1599",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1599",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11465",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1005",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11701",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11699",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11700",
        "nombre": "199",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "199",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11512",
        "nombre": "209",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "265",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11743",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "415",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11877",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "949",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11835",
        "nombre": "949",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "949",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11518",
        "nombre": "369",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "429",
        "spec3": "60",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11517",
        "nombre": "369",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "425",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11843",
        "nombre": "419",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "419",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11992",
        "nombre": "1799",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "1799",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "11741",
        "nombre": "359",
        "categoria": "ecosistema",
        "spec1": "0",
        "spec2": "415",
        "spec3": "56",
        "precio": 0,
        "precioOferta": 0
    }
    ,
    {
        "codigo": "10971",
        "nombre": "1499",
        "categoria": "ecosistema",
        "spec1": "1399",
        "spec2": "1499",
        "spec3": "0",
        "precio": 0,
        "precioOferta": 0
    }
];