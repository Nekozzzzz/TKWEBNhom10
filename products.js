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
        image: 'images/ao_so_mi_dai_tay_nu/áo mặc định.webp',
        colors: ['xanh da trời', 'cam', 'trắng', 'màu be'],
        previewImages: [
            'images/ao_so_mi_dai_tay_nu/áo mặc định.webp',
            'images/ao_so_mi_dai_tay_nu/áo màu cam sữa.webp',
            'images/ao_so_mi_dai_tay_nu/áo màu trắng.webp',
            'images/ao_so_mi_dai_tay_nu/áo mùa vàng chanh.webp',
        ],
        description: 'Áo sơ mi dài tay thanh lịch, thiết kế trẻ trung, thích hợp đi làm hoặc đi chơi.'
    },
    {
        name: 'Áo nơ có sọc',
        price: 100000,
        image: 'images/ao_so_mi_ngan_nu/áo mặc định.webp',
        colors: ['xanh', 'đen', 'hồng', 'trắng' ],
        previewImages: [
            'images/ao_so_mi_ngan_nu/áo mặc định.webp',
            'images/ao_so_mi_ngan_nu/áo nơ sọc đen.webp',
            'images/ao_so_mi_ngan_nu/áo nơ sọc đỏ.webp',
            'images/ao_so_mi_ngan_nu/áo nơ sọc xanh.webp',
        ],
        description: 'Áo Sơ Mi Nữ Form Rộng kiểu sọc nơ thêu.'
    },
    {
        name: 'áo sơ mi ngắn tay cho nam',
        price: 250000,
        image: 'images/ao_so_mi_ngan_tay_nam/áo sơ mi màu đen.webp',
        colors: ['đen', 'kem', 'trắng', 'xanh lá'],
        previewImages: [
            'images/ao_so_mi_ngan_tay_nam/áo sơ mi màu đen.webp',
            'images/ao_so_mi_ngan_tay_nam/áo sơ mi màu kem.webp',
            'images/ao_so_mi_ngan_tay_nam/áo sơ mi màu trắng.webp',
            'images/ao_so_mi_ngan_tay_nam/áo sơ mi mặc định.webp',
        ],
        description: 'Áo Sơ mi ngắn tay thấm hút mồ hôi.'
    },
    {
        name: 'Áo sơ mi tay dài',
        price: 200000,
        image: 'images/ao_somi_dai_tay/áo màu xám.webp',
        colors: ['xám', 'xanh mint', 'xanh ve chai', 'trắng'],
        previewImages: [
            'images/ao_somi_dai_tay/áo màu xám.webp',
            'images/ao_somi_dai_tay/áo màu xanh mint.webp',
            'images/ao_somi_dai_tay/áo màu xanh ve chai.webp',
            'images/ao_somi_dai_tay/áo mặc định.webp',
        ],
        description: 'Áo sơ mi nam tay dài  Vải Chéo dày dặn, co giãn 2 chiều.'
    },
    {
        name: 'Áo thun boxy',
        price: 150000,
        image: 'images/ao_thun_boxy/áo màu đỏ.webp',
        colors: ['đỏ', 'trắng', 'xám', 'đen'],
        previewImages: [
            'images/ao_thun_boxy/áo màu đỏ.webp',
            'images/ao_thun_boxy/áo màu trắng.webp',
            'images/ao_thun_boxy/áo màu xám.webp',
            'images/ao_thun_boxy/áo mặc định.webp',
        ],
        description: 'Áo thun form boxy cotton.'
    },
    {
        name: 'Áo thun cổ tròn',
        price: 150000,
        image: 'images/ao_thun_co_tron/áo đen.webp',
        colors: ['đen', 'xám', 'trắng', 'xám đen'],
        previewImages: [
            'images/ao_thun_co_tron/áo đen.webp',
            'images/ao_thun_co_tron/áo mặc định.webp',
            'images/ao_thun_co_tron/áo trắng.webp',
            'images/ao_thun_co_tron/áo xám đậm.webp',
        ],
        description: 'Áo thun cổ tròn trơn nhúm eo 4 phong cách Hàn Quốc .'
    },
    {
        name: 'Áo thun in hình cô gái',
        price: 200000,
        image: 'images/ao_thun_in_hinh_co_gai/áo màu đen.webp',
        colors: ['đen', 'đỏ', 'hồng', 'vàng'],
        previewImages: [
            'images/ao_thun_in_hinh_co_gai/áo màu đen.webp',
            'images/ao_thun_in_hinh_co_gai/áo màu đỏ.webp',
            'images/ao_thun_in_hinh_co_gai/áo màu hồng.webp',
            'images/ao_thun_in_hinh_co_gai/áo mặc định.webp',
        ],
        description: 'Áo Phông In Hình Cô Gái 2 Mặt Form Rộng Dáng Giấu Quần – Chất Cotton Nhiều Màu Dễ Phối.'
    }, {
        name: 'Áo thun cổ tròn',
        price: 200000,
        image: 'images/ao_thun_no/áo thun nơ kem.webp',
        colors: ['kem', 'đen', 'trắng', 'xám'],
        previewImages: [
            'images/ao_thun_no/áo thun nơ kem.webp',
            'images/ao_thun_no/áo thun nơ mặc định.webp',
            'images/ao_thun_no/áo thun nơ trắng.webp',
            'images/ao_thun_no/áo thun nơ xám.webp',
        ],
        description: 'Áo thun nơ nữ hàn quốc cổ tròn đẹp áo thun cute.'
    },
    {
        name: 'Set body chip cho trẻ sơ sinh',
        price: 70000,
        image: 'images/body_chip_cho_tre_so_sinh/cà rốt.webp',
        colors: ['cà rốt cam', 'dâu tây đỏ', 'dứa vàng', 'vịt vàng'],
        previewImages: [
            'images/body_chip_cho_tre_so_sinh/cà rốt.webp',
            'images/body_chip_cho_tre_so_sinh/dâu tay.webp',
            'images/body_chip_cho_tre_so_sinh/quả dứa.webp',
            'images/body_chip_cho_tre_so_sinh/set mặc định.webp',
        ],
        description: 'Body chíp cho bé sơ sinh  2 dây mùa hè cho bé chất cotton mềm mát.'
    },
    {
        name: 'Chân váy',
        price: 150000,
        image: 'images/chan_vay/chân váy hồng.webp',
        colors: ['hồng', 'đen', 'trắng', 'xám'],
        previewImages: [
            'images/chan_vay/chân váy hồng.webp',
            'images/chan_vay/chân váy mặc định.webp',
            'images/chan_vay/chân váy trắng.webp',
            'images/chan_vay/chân váy xám.webp',
        ],
        description: 'Chân váy TENNIS có quần bảo hộ.'
    },
    {
        name: 'Đầm body',
        price: 200000,
        image: 'images/dam/đầm body chấm bi.webp',
        colors: ['chấm bi', 'nâu', 'trắng', 'đen'],
        previewImages: [
            'images/dam/đầm body chấm bi.webp',
            'images/dam/đầm body nâu.webp',
            'images/dam/đầm body trắng.webp',
            'images/dam/đầm mặc định.webp',
        ],
        description: 'Đầm body cổ yếm cột dây ôm dáng slay.'
    },
    {
        name: 'Đồ công sở',
        price: 300000,
        image: 'images/do_cong_so/set bộ đồ công sở màu hồng.webp',
        colors: ['hồng', 'trắng', 'xanh', 'đen'],
        previewImages: [
            'images/do_cong_so/set bộ đồ công sở màu hồng.webp',
            'images/do_cong_so/set bộ đồ công sở màu trắng.webp',
            'images/do_cong_so/set bộ đồ công sở màu xanh.webp',
            'images/do_cong_so/set bộ đồ công sở mặc định.webp',
        ],
        description: 'Đồ bộ công sở xinh dành cho nữ.'
    },
    {
        name: 'Set đồ gia đình',
        price: 500000,
        image: 'images/do_gia_dinh/set màu bơ.webp',
        colors: ['xanh bơ', 'trắng + vàng', 'xanh da trời', 'nâu + trắng'],
        previewImages: [
            'images/do_gia_dinh/set màu bơ.webp',
            'images/do_gia_dinh/set màu vàng.webp',
            'images/do_gia_dinh/set màu xanh.webp',
            'images/do_gia_dinh/set mặc định.webp',
        ],
        description: 'Set đồ gia đình dễ thương 100% cotton.'
    },
    {
        name: 'Set đồ ngủ',
        price: 200000,
        image: 'images/do_ngu/dồ ngủ màu tím.webp',
        colors: ['hồng', 'trắng', 'đen', 'vàng'],
        previewImages: [
            'images/do_ngu/dồ ngủ màu tím.webp',
            'images/do_ngu/đồ ngủ cún trắng.webp',
            'images/do_ngu/đồ ngủ mặc định.webp',
            'images/do_ngu/đồ ngủ vịt vàng.webp',
        ],
        description: 'Đồ ngủ pijama cute kate lụa.'
    },
    {
        name: 'Set đồ trẻ em',
        price: 100000,
        image: 'images/do_tre_em/đồ trẻ em hồng.webp',
        colors: ['hồng', 'cam trắng', 'cam', 'xanh hồng'],
        previewImages: [
            'images/do_tre_em/đồ trẻ em hồng.webp',
            'images/do_tre_em/đồ trẻ em màu be.webp',
            'images/do_tre_em/đồ trẻ em mặc định.webp',
            'images/do_tre_em/đồ trẻ em xanh than.webp',
        ],
        description: 'Bộ quần áo mùa hè dành cho bé trai và bé gái.'
    },
    {
        name: 'Set đồ cho trẻ sơ sinh',
        price: 80000,
        image: 'images/do_tre_so_sinh/set màu hồng.webp',
        colors: ['tím', 'xanh chuối', 'xanh biển', 'xanh da trời'],
        previewImages: [
            'images/do_tre_so_sinh/set màu hồng.webp',
            'images/do_tre_so_sinh/set màu vàng.webp',
            'images/do_tre_so_sinh/set màu xanh.webp',
            'images/do_tre_so_sinh/set mặc định.webp',
        ],
        description: 'Đồ bộ cotton mặc nhẹ Mềm Mát Cho Bé Sơ Sinh .'
    },
    {
        name: 'Quần',
        price: 300000,
        image: 'images/quan/quần mặc định.webp',
        colors: ['đen', 'hồng', 'trắng 1', 'trắng 2'],
        previewImages: [
            'images/quan/quần mặc định.webp',
            'images/quan/quần sọc hồng.webp',
            'images/quan/quần sọc kem.webp',
            'images/quan/quần sọc nâu.webp',
        ],
        description: 'Quần kẻ sọc chỉ ống suông rộng hack dáng đủ size dễ bận chất vải mịn mát.'
    },
    {
        name: 'Quần âu nam',
        price: 350000,
        image: 'images/quan_au_nam/quần màu be.webp',
        colors: ['màu be', 'màu ngẫu nhiên', 'xám đậm', 'xám nhạt'],
        previewImages: [
            'images/quan_au_nam/quần màu be.webp',
            'images/quan_au_nam/quần mặc định.webp',
            'images/quan_au_nam/quần xám đậm.webp',
            'images/quan_au_nam/quần xám nhạt.webp',
        ],
        description: 'Quần âu nam , form suông, lưng chun ẩn tinh tế, chất co giãn 2 chiều.'
    },
    {
        name: 'Set đồ dá banh',
        price: 200000,
        image: 'images/set_da_banh/set màu đỏ.webp',
        colors: ['đỏ', 'trắng', 'xanh biển', 'xanh lục'],
        previewImages: [
            'images/set_da_banh/set màu đỏ.webp',
            'images/set_da_banh/set màu trắng.webp',
            'images/set_da_banh/set màu xanh.webp',
            'images/set_da_banh/set mặc định.webp',
        ],
        description: 'Bộ quần áo bóng đá  hàng thun lạnh cao cấp.'
    },
    {
        name: 'Set đồ dễ thương cho bé gái',
        price: 150000,
        image: 'images/set_de_thuong_cho_be_gai/set chấm bi đỏ.webp',
        colors: ['đỏ', 'trắng hoa', 'hồng', 'trắng họa tiết dâu tây'],
        previewImages: [
            'images/set_de_thuong_cho_be_gai/set chấm bi đỏ.webp',
            'images/set_de_thuong_cho_be_gai/set hoa nhí trắng.webp',
            'images/set_de_thuong_cho_be_gai/set hồng nơ.webp',
            'images/set_de_thuong_cho_be_gai/set mặc định.webp',
        ],
        description: 'Set đồ dễ thương dành cho bé gái.'
    },
    {
        name: 'Set đồ cho bé gái',
        price: 80000,
        image: 'images/set_do_cho_be_gai/set màu  hồng.webp',
        colors: ['hồng', 'tím', 'xanh dương', 'ngẫu nhiên'],
        previewImages: [
            'images/set_do_cho_be_gai/set màu  hồng.webp',
            'images/set_do_cho_be_gai/set màu tím.webp',
            'images/set_do_cho_be_gai/set màu xanh dương.webp',
            'images/set_do_cho_be_gai/set mặc định.webp',
        ],
        description: 'Bộ quần áo cotton mềm mịn mát,cho bé gái.'
    },
    {
        name: 'Set đồ cho bé trai ',
        price: 100000,
        image: 'images/set_do_cho_be_trai/set màu cam.webp',
        colors: ['cam', 'vàng', 'xám', 'xanh lá'],
        previewImages: [
            'images/set_do_cho_be_trai/set màu cam.webp',
            'images/set_do_cho_be_trai/set màu vàng.webp',
            'images/set_do_cho_be_trai/set màu xám.webp',
            'images/set_do_cho_be_trai/set mặc định.webp',
        ],
        description: 'Đồ bộ bé trai áo ba lỗ quần thun cotton in hình LABUBU .'
    },
    {
        name: 'Set đồ đôi nam nữ',
        price: 600000,
        image: 'images/set_do_doi_nam_nu/set màu đỏ.webp',
        colors: ['đỏ', 'hồng', 'trắng', 'đen'],
        previewImages: [
            'images/set_do_doi_nam_nu/set màu đỏ.webp',
            'images/set_do_doi_nam_nu/set màu hồng.webp',
            'images/set_do_doi_nam_nu/set màu trắng.webp',
            'images/set_do_doi_nam_nu/set mặc định.webp',
        ],
        description: 'Đồ đôi nam nữ COUPLE-hàng cao cấp .'
    },
    {
        name: 'Set thể thao bóng rổ cho bé trai',
        price: 100000,
        image: 'images/set_the_thao_cho_be_trai/set màu bích.webp',
        colors: ['xanh biển đậm', 'đỏ', 'xanh lá', 'vàng'],
        previewImages: [
            'images/set_the_thao_cho_be_trai/set màu bích.webp',
            'images/set_the_thao_cho_be_trai/set màu đỏ.webp',
            'images/set_the_thao_cho_be_trai/set màu xanh.webp',
            'images/set_the_thao_cho_be_trai/set mặc định.webp',
        ],
        description: 'Bộ đồ thể thao sát nach quần viên tròn nhiều màu.'
    },
    {
        name: 'Set thể thao nam',
        price: 200000,
        image: 'images/set_the_thao_nam/set màu ghi.webp',
        colors: ['xám', 'xanh biển đậm', 'xám xanh', 'xám đen'],
        previewImages: [
            'images/set_the_thao_nam/set màu ghi.webp',
            'images/set_the_thao_nam/set màu xanh than.webp',
            'images/set_the_thao_nam/set màu xanh.webp',
            'images/set_the_thao_nam/set mặc định.webp',
        ],
        description: 'Quần áo thể thao nam chất thun lạnh co giãn thấm hút mồ hôi tốt .'
    },
    {
        name: 'Set thể thao nữ',
        price: 150000,
        image: 'images/set_the_thao_nu/set mặc định.webp',
        colors: ['đen + trắng', 'tím', 'xanh biển + trắng', 'xanh bơ + trắng'],
        previewImages: [
            'images/set_the_thao_nu/set mặc định.webp',
            'images/set_the_thao_nu/set tím.webp',
            'images/set_the_thao_nu/set xanh biển.webp',
            'images/set_the_thao_nu/set xanh bơ.webp',
        ],
        description: 'Bộ Váy Thể Thao Nữ Áo Tay Ngắn kèm chân váy.'
    },
    {
        name: 'Set thu đông cho trẻ em',
        price: 120000,
        image: 'images/set_thu_dong_cho_tre_em/set cá ngựa.webp',
        colors: ['xanh biển', 'xanh lục', 'trắng', 'màu be'],
        previewImages: [
            'images/set_thu_dong_cho_tre_em/set cá ngựa.webp',
            'images/set_thu_dong_cho_tre_em/set cá sấu.webp',
            'images/set_thu_dong_cho_tre_em/set gấu.webp',
            'images/set_thu_dong_cho_tre_em/set mặc định.webp',
        ],
        description: 'Quần áo trẻ em, hàng thu đông chất đẹp, cotton 100%.'
    },
    {
        name: 'Áo croptop hai dây nữ',
        price: 80000,
        image: 'images/2/Áo_Croptop_Hai_Dây_Nữ/áo mặc định.webp',
        colors: ['trắng', 'hồng', 'xanh rêu', 'đỏ đô'],
        previewImages: [
            'images/2/Áo_Croptop_Hai_Dây_Nữ/áo mặc định.webp',
            'images/2/Áo_Croptop_Hai_Dây_Nữ/áo nơ sen.webp',
            'images/2/Áo_Croptop_Hai_Dây_Nữ/áo nơ trà.webp',
            'images/2/Áo_Croptop_Hai_Dây_Nữ/c.webp',
        ],
        description: 'Áo Croptop Hai Dây Nữ Đính Nơ Ren Xinh Xắn.'
    },
    {
        name: 'Áo hai dây nữ trơn',
        price: 70000,
        image: 'images/2/Áo_Hai_Dây_Nữ_Trơn/áo màu đỏ đô.webp',
        colors: ['đỏ', 'xám', 'đen', 'tím'],
        previewImages: [
            'images/2/Áo_Hai_Dây_Nữ_Trơn/áo màu đỏ đô.webp',
            'images/2/Áo_Hai_Dây_Nữ_Trơn/áo màu xám.webp',
            'images/2/Áo_Hai_Dây_Nữ_Trơn/áo mặc định.webp',
            'images/2/Áo_Hai_Dây_Nữ_Trơn/áo mẫu xanh navy.webp',
        ],
        description: 'Áo Hai Dây Nữ Trơn Basic Nhiều Màu Chất Thun Gân Mát Mẻ.'
    },
{
        name: 'Áo ống basic',
        price: 60000,
        image: 'images/2/Áo_Ống/áo ống màu nâu.webp',
        colors: ['nâu', 'vàng', 'xanh biển', 'đỏ'],
        previewImages: [
            'images/2/Áo_Ống/áo ống màu nâu.webp',
            'images/2/Áo_Ống/áo ống màu vàng.webp',
            'images/2/Áo_Ống/áo ống màu xanh biển.webp',
            'images/2/Áo_Ống/áo ống mặc định.webp',
        ],
        description: 'Áo ống chất liệu làm bằng cotton mát mẻ.'
    },
    {
        name: 'Áo Ống Nữ Thêu Chữ',
        price: 60000,
        image: 'images/2/Áo_Ống_Nữ_Thêu_Chữ/áo mặc định.webp',
        colors: ['đen', 'màu vani', 'xám', 'xanh mây'],
        previewImages: [
            'images/2/Áo_Ống_Nữ_Thêu_Chữ/áo mặc định.webp',
            'images/2/Áo_Ống_Nữ_Thêu_Chữ/áo vani.webp',
            'images/2/Áo_Ống_Nữ_Thêu_Chữ/áo xám.webp',
            'images/2/Áo_Ống_Nữ_Thêu_Chữ/áo xanh mây.webp',
        ],
        description: 'Áo Ống Nữ Thêu Chữ Phối Viền Ren Dễ Thương Nữ Tính Slay.'
    },
    {
        name: 'áo thun ren trái tim ',
        price: 70000,
        image: 'images/2/áo_thun_ôm_ren_trái_tim/áo ren trá tim mặc định.webp',
        colors: ['màu vani', 'đen', 'xám xanh', 'xanh mây'],
        previewImages: [
            'images/2/áo_thun_ôm_ren_trái_tim/áo ren trá tim mặc định.webp',
            'images/2/áo_thun_ôm_ren_trái_tim/áo ren trái tim màu đen.webp',
            'images/2/áo_thun_ôm_ren_trái_tim/áo ren trái tim màu xám.webp',
            'images/2/áo_thun_ôm_ren_trái_tim/áo ren trái tim màu xanh.webp',
        ],
        description: 'Áo Thun Nữ Form Ôm Phối Ren Trái Tim Coquette Dễ Thương.'
    },
    {
        name: 'Áo thun ren',
        price: 70000,
        image: 'images/2/áo_thun_viền_ren/áo ren đen.webp',
        colors: ['đen', 'hồng', 'mặc định', 'xanh'],
        previewImages: [
            'images/2/áo_thun_viền_ren/áo ren đen.webp',
            'images/2/áo_thun_viền_ren/áo ren hồng.webp',
            'images/2/áo_thun_viền_ren/áo ren mặc định.webp',
            'images/2/áo_thun_viền_ren/áo ren xanh.webp',
        ],
        description: 'Áo Thun Nữ Form Ôm Phối Ren.'
    },
    {
        name: 'Chân váy xòe',
        price: 90000,
        image: 'images/2/chân_váy_xòe/chân váy hồng đất.webp',
        colors: ['hồng đất', 'màu kem', 'trắng', 'xanh biển'],
        previewImages: [
            'images/2/chân_váy_xòe/chân váy hồng đất.webp',
            'images/2/chân_váy_xòe/chân váy kem.webp',
            'images/2/chân_váy_xòe/chân váy mặc định.webp',
            'images/2/chân_váy_xòe/chân váy xanh biển.webp',
        ],
        description: 'Chân Váy Xòe 3 Tầng Coquette Dễ Thương Có Quần Bảo Hộ.'
    },
    {
        name: ' Đầm Body Nữ',
        price: 120000,
        image: 'images/2/Đầm_Body_Nữ/dầm mặc định.webp',
        colors: ['xám mặc định', 'màu be', 'đen', 'xám xanh'],
        previewImages: [
            'images/2/Đầm_Body_Nữ/dầm mặc định.webp',
            'images/2/Đầm_Body_Nữ/đầm màu be.webp',
            'images/2/Đầm_Body_Nữ/đầm màu đen.webp',
            'images/2/Đầm_Body_Nữ/đầm màu xám.webp',
        ],
        description: 'Đầm Body Nữ Cổ Tròn Chất Len Tăm Lông Dệt Dày Dặn Basic.'
    },
    {
        name: 'Đầm nữ trễ vai tay dài',
        price: 200000,
        image: 'images/2/Đầm_Nữ_Trễ_Vai_Tay_Dài/đầm màu hồng.webp',
        colors: ['hồng', 'nâu be', 'xám gạo', 'trắng'],
        previewImages: [
            'images/2/Đầm_Nữ_Trễ_Vai_Tay_Dài/đầm màu hồng.webp',
            'images/2/Đầm_Nữ_Trễ_Vai_Tay_Dài/đầm màu nâu be.webp',
            'images/2/Đầm_Nữ_Trễ_Vai_Tay_Dài/đầm màu xám gạo.webp',
            'images/2/Đầm_Nữ_Trễ_Vai_Tay_Dài/đầm mặc định.webp',
        ],
        description: 'Đầm dành cho nữ, dài tay, xinh xắn.'
    },
    {
        name: 'Quần short đùi nữ',
        price: 50000,
        image: 'images/2/Quần_Short_Đùi_Nữ/quần short đùi nữ mặc định.webp',
        colors: ['đỏ', 'đen', 'hồng', 'xanh'],
        previewImages: [
            'images/2/Quần_Short_Đùi_Nữ/quần short đùi nữ mặc định.webp',
            'images/2/Quần_Short_Đùi_Nữ/quần short đùi nữ sọc đen.webp',
            'images/2/Quần_Short_Đùi_Nữ/quần short đùi nữ sọc hồng.webp',
            'images/2/Quần_Short_Đùi_Nữ/quần short đùi nữ sọc xanh.webp',
        ],
        description: 'Quần Short Đùi Nữ Sọc Phối Ren Nơ Cúc Bông Xinh Xắn Thoải Mái Mát Mẻ.'
    },
    {
        name: 'Quần Short Nữ Phối Sọc',
        price: 60000,
        image: 'images/2/Quần_Short_Nữ_Phối_Sọc/quần hồng sọc.webp',
        colors: ['hồng', 'đỏ', 'nâu', 'tím'],
        previewImages: [
            'images/2/Quần_Short_Nữ_Phối_Sọc/quần hồng sọc.webp',
            'images/2/Quần_Short_Nữ_Phối_Sọc/quần mặc định.webp',
            'images/2/Quần_Short_Nữ_Phối_Sọc/quần mocha sọc.webp',
            'images/2/Quần_Short_Nữ_Phối_Sọc/quần tím sọc.webp',
        ],
        description: 'Quần Short Nữ Phối Sọc Năng Động Chất Gió Nhăn Mát Mẻ.'
    },
    {
        name: 'Váy giả quần',
        price: 60000,
        image: 'images/2/váy_giả_quần/váy giả quần màu đen.webp',
        colors: ['đen', 'hồng', 'trắng chấm hồng', 'trắng'],
        previewImages: [
            'images/2/váy_giả_quần/váy giả quần màu đen.webp',
            'images/2/váy_giả_quần/váy giả quần màu hồng.webp',
            'images/2/váy_giả_quần/váy giả quần màu kem.webp',
            'images/2/váy_giả_quần/váy giả quần màu mặc định.webp',
        ],
        description: 'Váy giả quần 4 Tầng Dáng Ngắn Lưng Thun Dễ Thương.'
    }]