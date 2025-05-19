const products = [
    {
        name: 'Áo trễ vai',
        price: 100000,
        image: 'images/ao_kieu/ao_tre_vai_mac_dinh.webp',
        colors: ['trắng', 'hồng', 'đỏ', 'đen'],
        previewImages: [
            'images/ao_kieu/ao_tre_vai_mac_dinh.webp',
            'images/ao_kieu/ao_tre_vai_hong.webp',
            'images/ao_kieu/ao_tre_vai_do.webp',
            'images/ao_kieu/ao_tre_vai_den.webp'
        ],
        description: 'Áo trễ vai nữ tính, chất liệu cotton mềm mại, phù hợp cho mùa hè.'
    },
    {
        name: 'Áo sơ mi dài tay nữ',
        price: 150000,
        image: 'images/ao_so_mi_dai_tay_nu/ao_mac_dinh.webp',
        colors: ['xanh da trời', 'cam', 'trắng', 'màu be'],
        previewImages: [
            'images/ao_so_mi_dai_tay_nu/ao_mac_dinh.webp',
            'images/ao_so_mi_dai_tay_nu/ao_mau_cam_sua.webp',
            'images/ao_so_mi_dai_tay_nu/ao_mau_trang.webp',
            'images/ao_so_mi_dai_tay_nu/ao_mua_vang_chanh.webp',
        ],
        description: 'Áo sơ mi dài tay thanh lịch, thiết kế trẻ trung, thích hợp đi làm hoặc đi chơi.'
    },
    {
        name: 'Áo nơ có sọc',
        price: 100000,
        image: 'images/ao_so_mi_ngan_nu/ao_mac_dinh.webp',
        colors: ['xanh', 'đen', 'hồng', 'trắng' ],
        previewImages: [
            'images/ao_so_mi_ngan_nu/ao_mac_dinh.webp',
            'images/ao_so_mi_ngan_nu/ao_no_soc_den.webp',
            'images/ao_so_mi_ngan_nu/ao_no_soc_do.webp',
            'images/ao_so_mi_ngan_nu/ao_no_soc_xanh.webp',
        ],
        description: 'Áo Sơ Mi Nữ Form Rộng kiểu sọc nơ thêu.'
    },
    {
        name: 'áo sơ mi ngắn tay cho nam',
        price: 250000,
        image: 'images/ao_so_mi_ngan_tay_nam/ao_so_mi_mau_den.webp',
        colors: ['đen', 'kem', 'trắng', 'xanh lá'],
        previewImages: [
            'images/ao_so_mi_ngan_tay_nam/ao_so_mi_mau_den.webp',
            'images/ao_so_mi_ngan_tay_nam/ao_so_mi_mau_kem.webp',
            'images/ao_so_mi_ngan_tay_nam/ao_so_mi_mau_trang.webp',
            'images/ao_so_mi_ngan_tay_nam/ao_so_mi_mac_dinh.webp',
        ],
        description: 'Áo Sơ mi ngắn tay thấm hút mồ hôi.'
    },
    {
        name: 'Áo sơ mi tay dài',
        price: 200000,
        image: 'images/ao_somi_dai_tay/ao_mau_xam.webp',
        colors: ['xám', 'xanh mint', 'xanh ve chai', 'trắng'],
        previewImages: [
            'images/ao_somi_dai_tay/ao_mau_xam.webp',
            'images/ao_somi_dai_tay/ao_mau_xanh_mint.webp',
            'images/ao_somi_dai_tay/ao_mau_xanh_ve_chai.webp',
            'images/ao_somi_dai_tay/ao_mac_dinh.webp',
        ],
        description: 'Áo sơ mi nam tay dài  Vải Chéo dày dặn, co giãn 2 chiều.'
    },
    {
        name: 'Áo thun boxy',
        price: 150000,
        image: 'images/ao_thun_boxy/ao_mau_do.webp',
        colors: ['đỏ', 'trắng', 'xám', 'đen'],
        previewImages: [
            'images/ao_thun_boxy/ao_mau_do.webp',
            'images/ao_thun_boxy/ao_mau_trang.webp',
            'images/ao_thun_boxy/ao_mau_xam.webp',
            'images/ao_thun_boxy/ao_mac_dinh.webp',
        ],
        description: 'Áo thun form boxy cotton.'
    },
    {
        name: 'Áo thun cổ tròn',
        price: 150000,
        image: 'images/ao_thun_co_tron/ao_den.webp',
        colors: ['đen', 'xám', 'trắng', 'xám đen'],
        previewImages: [
            'images/ao_thun_co_tron/ao_den.webp',
            'images/ao_thun_co_tron/ao_mac_dinh.webp',
            'images/ao_thun_co_tron/ao_trang.webp',
            'images/ao_thun_co_tron/ao_xam_dam.webp',
        ],
        description: 'Áo thun cổ tròn trơn nhúm eo 4 phong cách Hàn Quốc .'
    },
    {
        name: 'Áo thun in hình cô gái',
        price: 200000,
        image: 'images/ao_thun_in_hinh_co_gai/ao_mau_den.webp',
        colors: ['đen', 'đỏ', 'hồng', 'vàng'],
        previewImages: [
            'images/ao_thun_in_hinh_co_gai/ao_mau_den.webp',
            'images/ao_thun_in_hinh_co_gai/ao_mau_do.webp',
            'images/ao_thun_in_hinh_co_gai/ao_mau_hong.webp',
            'images/ao_thun_in_hinh_co_gai/ao_mac_dinh.webp',
        ],
        description: 'Áo Phông In Hình Cô Gái 2 Mặt Form Rộng Dáng Giấu Quần – Chất Cotton Nhiều Màu Dễ Phối.'
    }, {
        name: 'Áo thun cổ tròn',
        price: 200000,
        image: 'images/ao_thun_no/ao_thun_no_kem.webp',
        colors: ['kem', 'đen', 'trắng', 'xám'],
        previewImages: [
            'images/ao_thun_no/ao_thun_no_kem.webp',
            'images/ao_thun_no/ao_thun_no_mac_dinh.webp',
            'images/ao_thun_no/ao_thun_no_trang.webp',
            'images/ao_thun_no/ao_thun_no_xam.webp',
        ],
        description: 'Áo thun nơ nữ hàn quốc cổ tròn đẹp áo thun cute.'
    },
    {
        name: 'Set body chip cho trẻ sơ sinh',
        price: 70000,
        image: 'images/body_chip_cho_tre_so_sinh/ca_rot.webp',
        colors: ['cà rốt cam', 'dâu tây đỏ', 'dứa vàng', 'vịt vàng'],
        previewImages: [
            'images/body_chip_cho_tre_so_sinh/ca_rot.webp',
            'images/body_chip_cho_tre_so_sinh/dau_tay.webp',
            'images/body_chip_cho_tre_so_sinh/qua_dua.webp',
            'images/body_chip_cho_tre_so_sinh/set_mac_dinh.webp',
        ],
        description: 'Body chíp cho bé sơ sinh  2 dây mùa hè cho bé chất cotton mềm mát.'
    },
    {
        name: 'Chân váy',
        price: 150000,
        image: 'images/chan_vay/chan_vay_hong.webp',
        colors: ['hồng', 'đen', 'trắng', 'xám'],
        previewImages: [
            'images/chan_vay/chan_vay_hong.webp',
            'images/chan_vay/chan_vay_mac_dinh.webp',
            'images/chan_vay/chan_vay_trang.webp',
            'images/chan_vay/chan_vay_xam.webp',
        ],
        description: 'Chân váy TENNIS có quần bảo hộ.'
    },
{
    name: 'Đầm body',
    price: 200000,
    image: 'images/dam/dam_body_cham_bi.webp',
    colors: ['chấm bi', 'nâu', 'trắng', 'đen'],
    previewImages: [
        'images/dam/dam_body_cham_bi.webp',
        'images/dam/dam_body_nau.webp',
        'images/dam/dam_body_trang.webp',
        'images/dam/dam_mac_dinh.webp',
    ],
    description: 'Đầm body cổ yếm cột dây ôm dáng slay.'
},
{
    name: 'Đồ công sở',
    price: 300000,
    image: 'images/do_cong_so/set_bo_do_cong_so_mau_hong.webp',
    colors: ['hồng', 'trắng', 'xanh', 'đen'],
    previewImages: [
        'images/do_cong_so/set_bo_do_cong_so_mau_hong.webp',
        'images/do_cong_so/set_bo_do_cong_so_mau_trang.webp',
        'images/do_cong_so/set_bo_do_cong_so_mau_xanh.webp',
        'images/do_cong_so/set_bo_do_cong_so_mac_dinh.webp',
    ],
    description: 'Đồ bộ công sở xinh dành cho nữ.'
},
{
    name: 'Set đồ gia đình',
    price: 500000,
    image: 'images/do_gia_dinh/set_mau_bo.webp',
    colors: ['xanh bơ', 'trắng + vàng', 'xanh da trời', 'nâu + trắng'],
    previewImages: [
        'images/do_gia_dinh/set_mau_bo.webp',
        'images/do_gia_dinh/set_mau_vang.webp',
        'images/do_gia_dinh/set_mau_xanh.webp',
        'images/do_gia_dinh/set_mac_dinh.webp',
    ],
    description: 'Set đồ gia đình dễ thương 100% cotton.'
},
{
    name: 'Set đồ ngủ',
    price: 200000,
    image: 'images/do_ngu/do_ngu_mau_tim.webp',
    colors: ['hồng', 'trắng', 'đen', 'vàng'],
    previewImages: [
        'images/do_ngu/do_ngu_mau_tim.webp',
        'images/do_ngu/do_ngu_cun_trang.webp',
        'images/do_ngu/do_ngu_mac_dinh.webp',
        'images/do_ngu/do_ngu_vit_vang.webp',
    ],
    description: 'Đồ ngủ pijama cute kate lụa.'
},
{
    name: 'Set đồ trẻ em',
    price: 100000,
    image: 'images/do_tre_em/do_tre_em_hong.webp',
    colors: ['hồng', 'cam trắng', 'cam', 'xanh hồng'],
    previewImages: [
        'images/do_tre_em/do_tre_em_hong.webp',
        'images/do_tre_em/do_tre_em_mau_be.webp',
        'images/do_tre_em/do_tre_em_mac_dinh.webp',
        'images/do_tre_em/do_tre_em_xanh_than.webp',
    ],
    description: 'Bộ quần áo mùa hè dành cho bé trai và bé gái.'
},
{
    name: 'Set đồ cho trẻ sơ sinh',
    price: 80000,
    image: 'images/do_tre_so_sinh/set_mau_hong.webp',
    colors: ['tím', 'xanh chuối', 'xanh biển', 'xanh da trời'],
    previewImages: [
        'images/do_tre_so_sinh/set_mau_hong.webp',
        'images/do_tre_so_sinh/set_mau_vang.webp',
        'images/do_tre_so_sinh/set_mau_xanh.webp',
        'images/do_tre_so_sinh/set_mac_dinh.webp',
    ],
    description: 'Đồ bộ cotton mặc nhẹ Mềm Mát Cho Bé Sơ Sinh .'
},
{
    name: 'Quần',
    price: 300000,
    image: 'images/quan/quan_mac_dinh.webp',
    colors: ['đen', 'hồng', 'trắng 1', 'trắng 2'],
    previewImages: [
        'images/quan/quan_mac_dinh.webp',
        'images/quan/quan_soc_hong.webp',
        'images/quan/quan_soc_kem.webp',
        'images/quan/quan_soc_nau.webp',
    ],
    description: 'Quần kẻ sọc chỉ ống suông rộng hack dáng đủ size dễ bận chất vải mịn mát.'
},
{
    name: 'Quần âu nam',
    price: 350000,
    image: 'images/quan_au_nam/quan_mau_be.webp',
    colors: ['màu be', 'màu ngẫu nhiên', 'xám đậm', 'xám nhạt'],
    previewImages: [
        'images/quan_au_nam/quan_mau_be.webp',
        'images/quan_au_nam/quan_mac_dinh.webp',
        'images/quan_au_nam/quan_xam_dam.webp',
        'images/quan_au_nam/quan_xam_nhat.webp',
    ],
    description: 'Quần âu nam , form suông, lưng chun ẩn tinh tế, chất co giãn 2 chiều.'
},
{
    name: 'Set đồ đá banh',
    price: 200000,
    image: 'images/set_da_banh/set_mau_do.webp',
    colors: ['đỏ', 'trắng', 'xanh biển', 'xanh lục'],
    previewImages: [
        'images/set_da_banh/set_mau_do.webp',
        'images/set_da_banh/set_mau_trang.webp',
        'images/set_da_banh/set_mau_xanh.webp',
        'images/set_da_banh/set_mac_dinh.webp',
    ],
    description: 'Bộ quần áo bóng đá  hàng thun lạnh cao cấp.'
},
{
    name: 'Set đồ dễ thương cho bé gái',
    price: 150000,
    image: 'images/set_de_thuong_cho_be_gai/set_cham_bi_do.webp',
    colors: ['đỏ', 'trắng hoa', 'hồng', 'trắng họa tiết dâu tây'],
    previewImages: [
        'images/set_de_thuong_cho_be_gai/set_cham_bi_do.webp',
        'images/set_de_thuong_cho_be_gai/set_hoa_nhi_trang.webp',
        'images/set_de_thuong_cho_be_gai/set_hong_no.webp',
        'images/set_de_thuong_cho_be_gai/set_mac_dinh.webp',
    ],
    description: 'Set đồ dễ thương dành cho bé gái.'
},
{
    name: 'Set đồ cho bé gái',
    price: 80000,
    image: 'images/set_do_cho_be_gai/set_mau_hong.webp',
    colors: ['hồng', 'tím', 'xanh dương', 'ngẫu nhiên'],
    previewImages: [
        'images/set_do_cho_be_gai/set_mau_hong.webp',
        'images/set_do_cho_be_gai/set_mau_tim.webp',
        'images/set_do_cho_be_gai/set_mau_xanh_duong.webp',
        'images/set_do_cho_be_gai/set_mac_dinh.webp',
    ],
    description: 'Bộ quần áo cotton mềm mịn mát,cho bé gái.'
},
{
    name: 'Set đồ cho bé trai ',
    price: 100000,
    image: 'images/set_do_cho_be_trai/set_mau_cam.webp',
    colors: ['cam', 'vàng', 'xám', 'xanh lá'],
    previewImages: [
        'images/set_do_cho_be_trai/set_mau_cam.webp',
        'images/set_do_cho_be_trai/set_mau_vang.webp',
        'images/set_do_cho_be_trai/set_mau_xam.webp',
        'images/set_do_cho_be_trai/set_mac_dinh.webp',
    ],
    description: 'Đồ bộ bé trai áo ba lỗ quần thun cotton in hình LABUBU .'
},
{
    name: 'Set đồ đôi nam nữ',
    price: 600000,
    image: 'images/set_do_doi_nam_nu/set_mau_do.webp',
    colors: ['đỏ', 'hồng', 'trắng', 'đen'],
    previewImages: [
        'images/set_do_doi_nam_nu/set_mau_do.webp',
        'images/set_do_doi_nam_nu/set_mau_hong.webp',
        'images/set_do_doi_nam_nu/set_mau_trang.webp',
        'images/set_do_doi_nam_nu/set_mac_dinh.webp',
    ],
    description: 'Đồ đôi nam nữ COUPLE-hàng cao cấp .'
},
{
    name: 'Set thể thao bóng rổ cho bé trai',
    price: 100000,
    image: 'images/set_the_thao_cho_be_trai/set_mau_bich.webp',
    colors: ['xanh biển đậm', 'đỏ', 'xanh lá', 'vàng'],
    previewImages: [
        'images/set_the_thao_cho_be_trai/set_mau_bich.webp',
        'images/set_the_thao_cho_be_trai/set_mau_do.webp',
        'images/set_the_thao_cho_be_trai/set_mau_xanh.webp',
        'images/set_the_thao_cho_be_trai/set_mac_dinh.webp',
    ],
    description: 'Bộ đồ thể thao sát nach quần viên tròn nhiều màu.'
},
{
    name: 'Set thể thao nam',
    price: 200000,
    image: 'images/set_the_thao_nam/set_mau_ghi.webp',
    colors: ['xám', 'xanh biển đậm', 'xám xanh', 'xám đen'],
    previewImages: [
        'images/set_the_thao_nam/set_mau_ghi.webp',
        'images/set_the_thao_nam/set_mau_xanh_than.webp',
        'images/set_the_thao_nam/set_mau_xanh.webp',
        'images/set_the_thao_nam/set_mac_dinh.webp',
    ],
    description: 'Quần áo thể thao nam chất thun lạnh co giãn thấm hút mồ hôi tốt .'
},
{
    name: 'Set thể thao nữ',
    price: 150000,
    image: 'images/set_the_thao_nu/set_mac_dinh.webp',
    colors: ['đen + trắng', 'tím', 'xanh biển + trắng', 'xanh bơ + trắng'],
    previewImages: [
        'images/set_the_thao_nu/set_mac_dinh.webp',
        'images/set_the_thao_nu/set_tim.webp',
        'images/set_the_thao_nu/set_xanh_bien.webp',
        'images/set_the_thao_nu/set_xanh_bo.webp',
    ],
    description: 'Bộ Váy Thể Thao Nữ Áo Tay Ngắn kèm chân váy.'
},
{
    name: 'Set thu đông cho trẻ em',
    price: 120000,
    image: 'images/set_thu_dong_cho_tre_em/set_ca_ngua.webp',
    colors: ['xanh biển', 'xanh lục', 'trắng', 'màu be'],
    previewImages: [
        'images/set_thu_dong_cho_tre_em/set_ca_ngua.webp',
        'images/set_thu_dong_cho_tre_em/set_ca_sau.webp',
        'images/set_thu_dong_cho_tre_em/set_gau.webp',
        'images/set_thu_dong_cho_tre_em/set_mac_dinh.webp',
    ],
    description: 'Quần áo trẻ em, hàng thu đông chất đẹp, cotton 100%.'
},
{
    name: 'Áo croptop hai dây nữ',
    price: 80000,
    image: 'images/2/ao_croptop_hai_day_nu/ao_mac_dinh.webp',
    colors: ['trắng', 'hồng', 'xanh rêu', 'đỏ đô'],
    previewImages: [
        'images/2/ao_croptop_hai_day_nu/ao_mac_dinh.webp',
        'images/2/ao_croptop_hai_day_nu/ao_no_sen.webp',
        'images/2/ao_croptop_hai_day_nu/ao_no_tra.webp',
        'images/2/ao_croptop_hai_day_nu/c.webp',
    ],
    description: 'Áo Croptop Hai Dây Nữ Đính Nơ Ren Xinh Xắn.'
},
{
    name: 'Áo hai dây nữ trơn',
    price: 70000,
    image: 'images/2/ao_hai_day_nu_tron/ao_mau_do_do.webp',
    colors: ['đỏ', 'xám', 'đen', 'tím'],
    previewImages: [
        'images/2/ao_hai_day_nu_tron/ao_mau_do_do.webp',
        'images/2/ao_hai_day_nu_tron/ao_mau_xam.webp',
        'images/2/ao_hai_day_nu_tron/ao_mac_dinh.webp',
        'images/2/ao_hai_day_nu_tron/ao_mau_xanh_navy.webp',
    ],
    description: 'Áo Hai Dây Nữ Trơn Basic Nhiều Màu Chất Thun Gân Mát Mẻ.'
},
{
    name: 'Áo ống basic',
    price: 60000,
    image: 'images/2/ao_ong/ao_ong_mau_nau.webp',
    colors: ['nâu', 'vàng', 'xanh biển', 'đỏ'],
    previewImages: [
        'images/2/ao_ong/ao_ong_mau_nau.webp',
        'images/2/ao_ong/ao_ong_mau_vang.webp',
        'images/2/ao_ong/ao_ong_mau_xanh_bien.webp',
        'images/2/ao_ong/ao_ong_mac_dinh.webp',
    ],
    description: 'Áo ống chất liệu làm bằng cotton mát mẻ.'
},
{
    name: 'Áo Ống Nữ Thêu Chữ',
    price: 60000,
    image: 'images/2/ao_ong_nu_theu_chu/ao_mac_dinh.webp',
    colors: ['đen', 'màu vani', 'xám', 'xanh mây'],
    previewImages: [
        'images/2/ao_ong_nu_theu_chu/ao_mac_dinh.webp',
        'images/2/ao_ong_nu_theu_chu/ao_vani.webp',
        'images/2/ao_ong_nu_theu_chu/ao_xam.webp',
        'images/2/ao_ong_nu_theu_chu/ao_xanh_may.webp',
    ],
    description: 'Áo Ống Nữ Thêu Chữ Phối Viền Ren Dễ Thương Nữ Tính Slay.'
},
{
    name: 'áo thun ren trái tim ',
    price: 70000,
    image: 'images/2/ao_thun_om_ren_trai_tim/ao_ren_tra_tim_mac_dinh.webp',
    colors: ['màu vani', 'đen', 'xám xanh', 'xanh mây'],
    previewImages: [
        'images/2/ao_thun_om_ren_trai_tim/ao_ren_tra_tim_mac_dinh.webp',
        'images/2/ao_thun_om_ren_trai_tim/ao_ren_trai_tim_mau_den.webp',
        'images/2/ao_thun_om_ren_trai_tim/ao_ren_trai_tim_mau_xam.webp',
        'images/2/ao_thun_om_ren_trai_tim/ao_ren_trai_tim_mau_xanh.webp',
    ],
    description: 'Áo Thun Nữ Form Ôm Phối Ren Trái Tim Coquette Dễ Thương.'
},
{
    name: 'Áo thun ren',
    price: 70000,
    image: 'images/2/ao_thun_vien_ren/ao_ren_den.webp',
    colors: ['đen', 'hồng', 'mặc định', 'xanh'],
    previewImages: [
        'images/2/ao_thun_vien_ren/ao_ren_den.webp',
        'images/2/ao_thun_vien_ren/ao_ren_hong.webp',
        'images/2/ao_thun_vien_ren/ao_ren_mac_dinh.webp',
        'images/2/ao_thun_vien_ren/ao_ren_xanh.webp',
    ],
    description: 'Áo Thun Nữ Form Ôm Phối Ren.'
},
{
    name: 'Chân váy xòe',
    price: 90000,
    image: 'images/2/chan_vay_xoe/chan_vay_hong_dat.webp',
    colors: ['hồng đất', 'màu kem', 'trắng', 'xanh biển'],
    previewImages: [
        'images/2/chan_vay_xoe/chan_vay_hong_dat.webp',
        'images/2/chan_vay_xoe/chan_vay_kem.webp',
        'images/2/chan_vay_xoe/chan_vay_mac_dinh.webp',
        'images/2/chan_vay_xoe/chan_vay_xanh_bien.webp',
    ],
    description: 'Chân Váy Xòe 3 Tầng Coquette Dễ Thương Có Quần Bảo Hộ.'
},
{
    name: ' Đầm Body Nữ',
    price: 120000,
    image: 'images/2/dam_body_nu/dam_mac_dinh.webp',
    colors: ['xám mặc định', 'màu be', 'đen', 'xám xanh'],
    previewImages: [
        'images/2/dam_body_nu/dam_mac_dinh.webp',
        'images/2/dam_body_nu/dam_mau_be.webp',
        'images/2/dam_body_nu/dam_mau_den.webp',
        'images/2/dam_body_nu/dam_mau_xam.webp',
    ],
    description: 'Đầm Body Nữ Cổ Tròn Chất Len Tăm Lông Dệt Dày Dặn Basic.'
},
{
    name: 'Đầm nữ trễ vai tay dài',
    price: 200000,
    image: 'images/2/dam_nu_tre_vai_tay_dai/dam_mau_hong.webp',
    colors: ['hồng', 'nâu be', 'xám gạo', 'trắng'],
    previewImages: [
        'images/2/dam_nu_tre_vai_tay_dai/dam_mau_hong.webp',
        'images/2/dam_nu_tre_vai_tay_dai/dam_mau_nau_be.webp',
        'images/2/dam_nu_tre_vai_tay_dai/dam_mau_xam_gao.webp',
        'images/2/dam_nu_tre_vai_tay_dai/dam_mac_dinh.webp',
    ],
    description: 'Đầm dành cho nữ, dài tay, xinh xắn.'
},
{
    name: 'Quần short đùi nữ',
    price: 50000,
    image: 'images/2/quan_short_dui_nu/quan_short_dui_nu_mac_dinh.webp',
    colors: ['đỏ', 'đen', 'hồng', 'xanh'],
    previewImages: [
        'images/2/quan_short_dui_nu/quan_short_dui_nu_mac_dinh.webp',
        'images/2/quan_short_dui_nu/quan_short_dui_nu_soc_den.webp',
        'images/2/quan_short_dui_nu/quan_short_dui_nu_soc_hong.webp',
        'images/2/quan_short_dui_nu/quan_short_dui_nu_soc_xanh.webp',
    ],
    description: 'Quần Short Đùi Nữ Sọc Phối Ren Nơ Cúc Bông Xinh Xắn Thoải Mái Mát Mẻ.'
},
{
    name: 'Quần Short Nữ Phối Sọc',
    price: 60000,
    image: 'images/2/quan_short_nu_phoi_soc/quan_hong_soc.webp',
    colors: ['hồng', 'đỏ', 'nâu', 'tím'],
    previewImages: [
        'images/2/quan_short_nu_phoi_soc/quan_hong_soc.webp',
        'images/2/quan_short_nu_phoi_soc/quan_mac_dinh.webp',
        'images/2/quan_short_nu_phoi_soc/quan_mocha_soc.webp',
        'images/2/quan_short_nu_phoi_soc/quan_tim_soc.webp',
    ],
    description: 'Quần Short Nữ Phối Sọc Năng Động Chất Gió Nhăn Mát Mẻ.'
},
{
    name: 'Váy giả quần',
    price: 60000,
    image: 'images/2/vay_gia_quan/vay_gia_quan_mau_den.webp',
    colors: ['đen', 'hồng', 'trắng chấm hồng', 'trắng'],
    previewImages: [
        'images/2/vay_gia_quan/vay_gia_quan_mau_den.webp',
        'images/2/vay_gia_quan/vay_gia_quan_mau_hong.webp',
        'images/2/vay_gia_quan/vay_gia_quan_mau_kem.webp',
        'images/2/vay_gia_quan/vay_gia_quan_mau_mac_dinh.webp',
    ],
    description: 'Váy giả quần 4 Tầng Dáng Ngắn Lưng Thun Dễ Thương.'
}]
