const country = [
    {VN: ['Viet Nam', 'Việt Nam', 'VN']}
]

// const MngArea =[
//     {
//         VN: 
//         [
//             {
//                 AreaCode: 'NB_DBSCL',
//                 GsheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
//             },
//             {
//                 AreaCode: 'NB_DNB',
//                 GsheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
//             }, 
//             {
//                 AreaCode: 'TB_BTB',
//                 GsheetID: '1ll8AQb5FBda0FBlTJWViiR78ZOUiZM3r21Lb1ze6EBU',
//             },
//             {
//                 AreaCode: 'TB_NTB',
//                 GsheetID: '1S40TN1va8HHp0EXrGBbvS3RbYWtCr8XW4vBZweKVUNo'
//             },
//             {
//                 AreaCode: 'TB_TN',
//                 GsheetID: '1dIVMheREa71s7O7pn0TvhcG_-oMS_niV--kNSDN227Q'
//             }
//         ]
//     }   
// ]
const ProvinceList = {
    // Dong Bang Song Cuu Long
    AG: 'An Giang',
    BL: 'Bac Lieu', 
    BT: 'Ben Tre',
    CM: 'Ca Mau', 
    CT: 'Can Tho', 
    DT: 'Dong Thap',
    HG: 'Hau Giang',
    KG: 'Kien Giang', 
    LA: 'Long An',
    ST: 'Soc Trang',
    TG: 'Tien Giang',
    TV: 'Tra Vinh',
    VL: 'Vinh Long',

    // Dong Nam Bo
    HCM: 'Ho Chi Minh',
    BD: 'Binh Duong',
    BP: 'Binh Phuoc',
    BRVT: 'Ba Ria - Vung Tau',
    DN: 'Dong Nai',
    TN: 'Tay Ninh',

    // Dong Bac Bo
    BG: 'Bac Giang',
    QN: 'Quang Ninh',
    TN: 'Thai Nguyen',
    PT: 'Phu Tho'
}

const DistrictList = {

    // Dong Bang Song Cuu Long
    // Ca Mau
    CM_1: 'Cai Nuoc', 
    CM_2: 'Dam Doi',
    CM_3: 'Nam Can',
    CM_4: 'Ngoc Hien',
    CM_5: 'Phu Tan',
    CM_6: 'Thoi Binh',
    CM_7: 'Tp Ca Mau',
    CM_8: 'Tran Van Thoi',
    CM_9: 'U Minh',
    // An Giang
    AG_1: 'An Phu',
    AG_2: 'Chau Doc', 
    AG_3: 'Chau Phu',
    AG_4: 'Chau Thanh',
    AG_5: 'Cho Moi', 
    AG_6: 'Long Xuyen',
    AG_7: 'Phu Tan',
    AG_8: 'Tan Chau',
    AG_9: 'Thoai Son',
    AG_10: 'Tinh Bien',
    AG_11: 'Tri Ton',
    // Soc Trang
    ST_1: 'Chau Thanh',
    ST_2: 'Cu Lao Dung',
    ST_3: 'Ke Sach',
    ST_4: 'Long Phu',
    ST_5: 'My Tu',
    ST_6: 'My Xuyen',
    ST_7: 'Nga Nam',
    ST_8: 'Soc Trang',
    ST_9: 'Thanh Tri',
    ST_10: 'Tran De',
    ST_11: 'Vinh Chau',
    // Kien Giang
    KG_1:'An Bien',
    KG_2:'An Minh',
    KG_3:'Chau Thanh',
    KG_4:'Giang Thanh',
    KG_6:'Giong Rieng',
    KG_7:'Go Quao',
    KG_8:'Ha Tien',
    KG_9:'Hon Dat',
    KG_10:'Kien Hai',
    KG_11:'Kien Luong',
    KG_12:'Phu Quoc',
    KG_13:'Rach Gia',
    KG_14:'Tan Hiep',
    KG_15:'U Minh Thuong',
    KG_16:'Vinh Thuan',
    // Can Tho
    CT_1: 'Binh Thuy',
    CT_2: 'Cai Rang',
    CT_3: 'Co Do',
    CT_4: 'Ninh Kieu',
    CT_5: 'O Mon',
    CT_6: 'Phong Dien',
    CT_7: 'Thoi Lai',
    CT_8: 'Thot Not',
    CT_9: 'Vinh Thanh',

    // Bac Lieu
    BL_1: 'Dong Hai',
    BL_2: 'Gia Rai',
    BL_3: 'Hoa Binh',
    BL_4: 'Hong Dan',
    BL_5: 'Phuoc Long',
    BL_6: 'TP Bac Lieu', 
    BL_7: 'Vinh Loi',

    // Long An 
    LA_1: 'Ben Luc',
    LA_2: 'Can Duoc',
    LA_3: 'Can Giuoc',
    LA_4: 'Chau Thanh',
    LA_5: 'Duc Hoa',
    LA_6: 'Duc Hue',
    LA_7: 'Kien Tuong',
    LA_8: 'Moc Hoa',
    LA_9: 'Tan An',
    LA_10: 'Tan Hung',
    LA_11: 'Tan Thanh',
    LA_12: 'Tan Tru',
    LA_13: 'Thanh Hoa',
    LA_14: 'Thu Thua',
    LA_15: 'Vinh Hung',
    // Vinh Long
    VL_1: 'Binh Minh',
    VL_2: 'Binh Tan',
    VL_3: 'Long Ho',
    VL_4: 'Mang Thit',
    VL_5: 'Tam Binh',
    VL_6: 'Tra On',
    VL_7: 'Vinh Long',
    VL_8: 'Vung Liem',
    // Tra Vinh
    TV_1: 'Cang Long',
    TV_2: 'Cau Ke',
    TV_3: 'Cau Ngang',
    TV_4: 'Chau Thanh',
    TV_5: 'Duyen Hai',
    TV_6: 'Tieu Can',
    TV_7: 'Tra Cu',
    TV_8: 'Tra Vinh',
    // Hau Giang
    HG_1: 'Chau Thanh',
    HG_2: 'Chau Thanh A',
    HG_3: 'Long My',
    HG_4: 'Nga Bay',
    HG_5: 'Phung Hiep',
    HG_6: 'Vi Thanh',
    HG_8: 'Vi Thuy',
    // Tien Giang
    TG_1: 'Cai Be',
    TG_2: 'Cai Lay',
    TG_3: 'Chau Thanh',
    TG_4: 'Cho Gao',
    TG_5: 'Go Cong',
    TG_6: 'Go Cong Dong',
    TG_7: 'Do Cong Tay',
    TG_8: 'My Tho',
    TG_9: 'Tan Phu Dong',
    TG_10: 'Tan Phuoc',
    // Ben Tre
    BT_1: 'Ba Tri',
    BT_2: 'Ben Tre',
    BT_3: 'Binh Dai',
    BT_4: 'Chau Thanh',
    BT_5: 'Cho Lach',
    BT_6: 'Giong Trom',
    BT_7: 'Mo Cay Bac',
    BT_8: 'Mo Cay Nam',
    BT_9: 'Thanh Phu',
    //Dong Thap
    DT_1: 'Cao Lanh',
    DT_2: 'Chau Thanh',
    DT_3: 'Hong Ngu',
    DT_4: 'Lai Vung',
    DT_5: 'Lap Vo',
    DT_6: 'Sa Dec',
    DT_7: 'Tam Nong',
    DT_8: 'Tan Hong',
    DT_9: 'Thanh Binh',
    DT_10: 'Thap Muoi',
    DT_11: 'Tp Hong Ngu',
    DT_12: 'Tp Cao Lanh',

    // Dong Nam Bo
    HCM_1: 'Thu Duc',
    HCM_2: 'Tan Phu',
    HCM_3: 'Tan Binh',
    HCM_4: 'Quan 9',
    HCM_5: 'Quan 8',
    HCM_6: 'Quan 7',
    HCM_7: 'Quan 6',
    HCM_8: 'Quan 5',
    HCM_9: 'Quan 4',
    HCM_10: 'Quan 3',
    HCM_11: 'Quan 2',
    HCM_12: 'Quan 12',
    HCM_13: 'Quan 11',
    HCM_14: 'Quan 10',
    HCM_15: 'Quan 1',
    HCM_16: 'Phu Nhuan',
    HCM_17: 'Nha Be',
    HCM_18: 'Hoc Mon',
    HCM_19: 'Go Vap',
    HCM_20: 'Cu Chi',
    HCM_21: 'Can Gio',
    HCM_22: 'Binh Thanh',
    HCM_23: 'Binh Tan',
    HCM_24: 'Binh Chanh',

    // Binh Duong
    BD_1:'Ben Cat',
    BD_2:'Dau Tieng',
    BD_3:'Di An',
    BD_4:'Phu Giao',
    BD_5:'Tan Uyen',
    BD_6:'Thu Dau Mot',
    BD_7:'Thuan An',

    // Binh Phuoc
    BP_1: 'Binh Long',
    BP_2: 'Bu Dang',
    BP_3: 'Bu Dop',
    BP_4: 'Bu Gia Map',
    BP_5: 'Chon Thanh',
    BP_6: 'Dong Phu',
    BP_7: 'Dong Xoai',
    BP_8: 'Hon Quan',
    BP_9: 'Loc Ninh',
    BP_10: 'Phuoc Long',

    //Ba Ria - Vung Tau
    BRVT_1: 'Ba Ria',
    BRVT_2: 'Chau Duc',
    BRVT_3: 'Dat Do',
    BRVT_4: 'Long Dien',
    BRVT_5: 'Tan Thanh',
    BRVT_6: 'Vung Tau',
    BRVT_7: 'Xuyen Moc',

    // Dong Nai
    DN_1:'Bien Hoa',
    DN_2:'Cam My',
    DN_3:'Dinh Quan',
    DN_4:'Long Khanh',
    DN_5:'Long Thanh',
    DN_6:'Nhon Trach',
    DN_7:'Tan Phu',
    DN_8:'Thong Nhat',
    DN_9:'Trang Bom',
    DN_10:'Vinh Cuu',
    DN_11:'Xuan Loc',

    // Tay Ninh 
    TN_1:'Ben Cau',
    TN_2:'Chau Thanh',
    TN_3:'Duong Minh Chau',
    TN_4:'Go Dau',
    TN_5:'Hoa Thanh',
    TN_6:'Tan Chau',
    TN_7:'Tan Bien',
    TN_8:'TP Tay Ninh',
    TN_9:'Trang Bang',

    // Bac Giang 
    BG_1: 'Hiep Hoa',
    BG_2: 'Lang Giang',
    BG_3: 'Luc Nam',
    BG_4: 'Luc Ngan',
    BG_5: 'Son Dong',
    BG_6: 'Tan Yen',
    BG_7: 'TP Bac Giang',
    BG_8: 'Viet Yen',
    BG_9: 'Yen Dung',
    BG_10: 'Yen The',

    // Quang Ninh
    QN_1:'Ba Che',
    QN_2:'Binh Lieu',
    QN_3:'Dong Trieu',
    QN_4:'Ha Long',
    QN_5:'Hai Ha',
    QN_6:'Hoanh Bo',
    QN_7:'Mong Cai',
    QN_8:'Quang Yen',
    QN_9:'Tien Yen',
    QN_10:'Uong Bi',

    // Thai Nguyen
    TN_1:'Phu Tho',
    TN_2:'Ha Giang',
    TN_3:'Tuyen Quang',
    TN_4:'Bac Kan',
    TN_5:'Cao Bang',
    TN_6:'Thai Nguyen',
    TN_7:'Lang Son',
    TN_8:'Bac Giang',
    TN_9:'Quang Ninh',

    // Phu Tho
    PT_1:'Cam Khe',
    PT_2:'Doan Hung',
    PT_3:'Ha Hoa',
    PT_4:'Lam Thao',
    PT_5:'Phu Ninh',
    PT_6:'TX Phu Tho', 
    PT_7:'Tam Nong',
    PT_8:'Tan Son',
    PT_9:'Thanh Ba',
    PT_10:'Thanh Son',
    PT_11:'Thanh Thuy',
    PT_12:'Viet Tri',
    PT_13:'Yen Lap',
}

const MngProv = 
    [
        // NB_DBSCL
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'AG',
            District: {
                AG_1: 'An Phu',
                AG_2: 'Chau Doc', 
                AG_3: 'Chau Phu',
                AG_4: 'Chau Thanh',
                AG_5: 'Cho Moi', 
                AG_6: 'Long Xuyen',
                AG_7: 'Phu Tan',
                AG_8: 'Tan Chau',
                AG_9: 'Thoai Son',
                AG_10: 'Tinh Bien',
                AG_11: 'Tri Ton'
            },
            DistrictSheetID: '1l5Ic1wtld-9p8QjA_dpqZ-YZkMabPmZqLOebkVfUQlo',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'BL',
            District: {
                BL_1: 'Dong Hai',
                BL_2: 'Gia Rai',
                BL_3: 'Hoa Binh',
                BL_4: 'Hong Dan',
                BL_5: 'Phuoc Long',
                BL_6: 'TP Bac Lieu', 
                BL_7: 'Vinh Loi'
            },
            DistrictSheetID: '18O7ZRv_lLPf7w8Fd_C-X3lkYZG9R3znaIMWj9eScfKU',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'BT',
            District: {
                BT_1: 'Ba Tri',
                BT_2: 'Ben Tre',
                BT_3: 'Binh Dai',
                BT_4: 'Chau Thanh',
                BT_5: 'Cho Lach',
                BT_6: 'Giong Trom',
                BT_7: 'Mo Cay Bac',
                BT_8: 'Mo Cay Nam',
                BT_9: 'Thanh Phu',
            },
            DistrictSheetID: '17elWj_rvL3_QVHNc89eiQ7XhkzBkHl6VDk2rZE-BWtc',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'CM',
            District: {
                CM_1: 'Cai Nuoc', 
                CM_2: 'Dam Doi',
                CM_3: 'Nam Can',
                CM_4: 'Ngoc Hien',
                CM_5: 'Phu Tan',
                CM_6: 'Thoi Binh',
                CM_7: 'Tp Ca Mau',
                CM_8: 'Tran Van Thoi',
                CM_9: 'U Minh'
            },
            DistrictSheetID: '1Uwj7pyz5R0HNPcznsOwApNl18I3nlJyvr38gB1hwuWU',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'CT',
            District: {
                CT_1: 'Binh Thuy',
                CT_2: 'Cai Rang',
                CT_3: 'Co Do',
                CT_4: 'Ninh Kieu',
                CT_5: 'O Mon',
                CT_6: 'Phong Dien',
                CT_7: 'Thoi Lai',
                CT_8: 'Thot Not',
                CT_9: 'Vinh Thanh',
            },
            DistrictSheetID: '1Ld2ahnIrJxQk-LLPOh5bfKSEKCYu666AWbNAEVaMt-s',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'DT',
            District: {
                DT_1: 'Cao Lanh',
                DT_2: 'Chau Thanh',
                DT_3: 'Hong Ngu',
                DT_4: 'Lai Vung',
                DT_5: 'Lap Vo',
                DT_6: 'Sa Dec',
                DT_7: 'Tam Nong',
                DT_8: 'Tan Hong',
                DT_9: 'Thanh Binh',
                DT_10: 'Thap Muoi',
                DT_11: 'Tp Hong Ngu',
                DT_12: 'Tp Cao Lanh',
            },
            DistrictSheetID: '1s5pI5IQvDPb5Un0pGGbyLomuqrMSL8dvJCAT20d6G08',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'HG',
            District: {
                HG_1: 'Chau Thanh',
                HG_2: 'Chau Thanh A',
                HG_3: 'Long My',
                HG_4: 'Nga Bay',
                HG_5: 'Phung Hiep',
                HG_6: 'Vi Thanh',
                HG_8: 'Vi Thuy'
            },
            DistrictSheetID: '1-iN7UdkUZ63goORUkKYfxqtdDO0f5rBcDwPjAVwEgPw',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'KG',
            District: {
                KG_1:'An Bien',
                KG_2:'An Minh',
                KG_3:'Chau Thanh',
                KG_4:'Giang Thanh',
                KG_6:'Giong Rieng',
                KG_7:'Go Quao',
                KG_8:'Ha Tien',
                KG_9:'Hon Dat',
                KG_10:'Kien Hai',
                KG_11:'Kien Luong',
                KG_12:'Phu Quoc',
                KG_13:'Rach Gia',
                KG_14:'Tan Hiep',
                KG_15:'U Minh Thuong',
                KG_16:'Vinh Thuan',
            },
            DistrictSheetID: '1-okxVMtBKirEhzglBM_vFIBbu06I5mvM0uLI36NHweI',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'LA',
            District: {
                LA_1: 'Ben Luc',
                LA_2: 'Can Duoc',
                LA_3: 'Can Giuoc',
                LA_4: 'Chau Thanh',
                LA_5: 'Duc Hoa',
                LA_6: 'Duc Hue',
                LA_7: 'Kien Tuong',
                LA_8: 'Moc Hoa',
                LA_9: 'Tan An',
                LA_10: 'Tan Hung',
                LA_11: 'Tan Thanh',
                LA_12: 'Tan Tru',
                LA_13: 'Thanh Hoa',
                LA_14: 'Thu Thua',
                LA_15: 'Vinh Hung'
            },
            DistrictSheetID: '1j0qacqUpYSjhR6AI3HbRltkv5hcsb9xFpu2-29k8bhE',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'ST',
            District: {},
            DistrictSheetID: '1shKoqGsaespZDBhPK1K7_rEwfLOHtpKw2APUxW1Gp4o',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'TG',
            District: {
                TG_1: 'Cai Be',
                TG_2: 'Cai Lay',
                TG_3: 'Chau Thanh',
                TG_4: 'Cho Gao',
                TG_5: 'Go Cong',
                TG_6: 'Go Cong Dong',
                TG_7: 'Do Cong Tay',
                TG_8: 'My Tho',
                TG_9: 'Tan Phu Dong',
                TG_10: 'Tan Phuoc',
            },
            DistrictSheetID: '1Upee5aCydp8TOng-yzy_6Z6LzUcwL3vsbsy7MDeRcCM',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'TV',
            District: {},
            DistrictSheetID: '10RYilumuFnVsscC1WJC6oSmX9FHDQ3K3HfaIbEoI8TA',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'VL',
            District: {
                VL_1: 'Binh Minh',
                VL_2: 'Binh Tan',
                VL_3: 'Long Ho',
                VL_4: 'Mang Thit',
                VL_5: 'Tam Binh',
                VL_6: 'Tra On',
                VL_7: 'Vinh Long',
                VL_8: 'Vung Liem',
            },
            DistrictSheetID: '16gSxMWCK96ypKFwqg1B6dZeu2Dm4NLFUIYrCLgtyXAY',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        },

        // NB_DNB
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'HCM',
            District: {
                HCM_1: 'Thu Duc',
                HCM_2: 'Tan Phu',
                HCM_3: 'Tan Binh',
                HCM_4: 'Quan 9',
                HCM_5: 'Quan 8',
                HCM_6: 'Quan 7',
                HCM_7: 'Quan 6',
                HCM_8: 'Quan 5',
                HCM_9: 'Quan 4',
                HCM_10: 'Quan 3',
                HCM_11: 'Quan 2',
                HCM_12: 'Quan 12',
                HCM_13: 'Quan 11',
                HCM_14: 'Quan 10',
                HCM_15: 'Quan 1',
                HCM_16: 'Phu Nhuan',
                HCM_17: 'Nha Be',
                HCM_18: 'Hoc Mon',
                HCM_19: 'Go Vap',
                HCM_20: 'Cu Chi',
                HCM_21: 'Can Gio',
                HCM_22: 'Binh Thanh',
                HCM_23: 'Binh Tan',
                HCM_24: 'Binh Chanh',
            },
            DistrictSheetID: '1gQ10i9XuWH2ctoI-vhzAXJL6mSpk6PAekv76P1Yd83U',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'BD',
            District: {
                BD_1:'Ben Cat',
                BD_2:'Dau Tieng',
                BD_3:'Di An',
                BD_4:'Phu Giao',
                BD_5:'Tan Uyen',
                BD_6:'Thu Dau Mot',
                BD_7:'Thuan An'
            },
            DistrictSheetID: '1kAJHthrGWVA-Hx_ZzWFrMk4AWexOeph_YF3kEvlcmH0',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'BP',
            District: {
                BP_1: 'Binh Long',
                BP_2: 'Bu Dang',
                BP_3: 'Bu Dop',
                BP_4: 'Bu Gia Map',
                BP_5: 'Chon Thanh',
                BP_6: 'Dong Phu',
                BP_7: 'Dong Xoai',
                BP_8: 'Hon Quan',
                BP_9: 'Loc Ninh',
                BP_10: 'Phuoc Long'
            },
            DistrictSheetID: '1wBbn2i9zgxwl8mKKBqxUXCUXiyJ9Jx_pXCVbgc-UY5o',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'BRVT',
            District: {
                BRVT_1: 'Ba Ria',
                BRVT_2: 'Chau Duc',
                BRVT_3: 'Dat Do',
                BRVT_4: 'Long Dien',
                BRVT_5: 'Tan Thanh',
                BRVT_6: 'Vung Tau',
                BRVT_7: 'Xuyen Moc',
            },
            DistrictSheetID: '1aiPsGfiLKst7tLBHIR4YolUTZFDEABVJuKJTsrZNSxQ',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'DN',
            District: {
                DN_1:'Bien Hoa',
                DN_2:'Cam My',
                DN_3:'Dinh Quan',
                DN_4:'Long Khanh',
                DN_5:'Long Thanh',
                DN_6:'Nhon Trach',
                DN_7:'Tan Phu',
                DN_8:'Thong Nhat',
                DN_9:'Trang Bom',
                DN_10:'Vinh Cuu',
                DN_11:'Xuan Loc',
            },
            DistrictSheetID: '1PsrGkozthGCAyIbAjQNljSBsutffEjNuCFx5m0f9gyc',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DNB',
            ProvinceCode: 'TN',
            District: {
                TN_1:'Ben Cau',
                TN_2:'Chau Thanh',
                TN_3:'Duong Minh Chau',
                TN_4:'Go Dau',
                TN_5:'Hoa Thanh',
                TN_6:'Tan Chau',
                TN_7:'Tan Bien',
                TN_8:'TP Tay Ninh',
                TN_9:'Trang Bang'
            },
            DistrictSheetID: '1XfjGR9T0PqbB769joeyFrIi3BuThOIHCO-HRKAYx7Po',
            ProvinceSheetID: '1JOj4IsTCCc0zBcuTEE-u9hCbRybvkYmY7K_KH4dFskk'
        },
        // BB_DBB
        {
            Country: 'Viet Nam',
            AreaCode: 'BB_DBB',
            ProvinceCode: 'BG',
            District: {
                BG_1: 'Hiep Hoa',
                BG_2: 'Lang Giang',
                BG_3: 'Luc Nam',
                BG_4: 'Luc Ngan',
                BG_5: 'Son Dong',
                BG_6: 'Tan Yen',
                BG_7: 'TP Bac Giang',
                BG_8: 'Viet Yen',
                BG_9: 'Yen Dung',
                BG_10: 'Yen The'
            },
            DistrictSheetID: '1tpmqYU8KHFQkgcvOnWdnwtDnO5aSDTWx6vf5SXsyp5M',
            ProvinceSheetID: '1XlV8zzaAAA9RR2G-hx8S1l43n_o46NPQ-XVwybDPAZA'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'BB_DBB',
            ProvinceCode: 'QN',
            District: {
                QN_1:'Ba Che',
                QN_2:'Binh Lieu',
                QN_3:'Dong Trieu',
                QN_4:'Ha Long',
                QN_5:'Hai Ha',
                QN_6:'Hoanh Bo',
                QN_7:'Mong Cai',
                QN_8:'Quang Yen',
                QN_9:'Tien Yen',
                QN_10:'Uong Bi'
            },
            DistrictSheetID: '1ShoJlnPj4XbNTbCtj4tX1C6d9-PFLgTDnyq9_RHEKTA',
            ProvinceSheetID: '1XlV8zzaAAA9RR2G-hx8S1l43n_o46NPQ-XVwybDPAZA'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'BB_DBB',
            ProvinceCode: 'TN',
            District: {
                TN_1:'Phu Tho',
                TN_2:'Ha Giang',
                TN_3:'Tuyen Quang',
                TN_4:'Bac Kan',
                TN_5:'Cao Bang',
                TN_6:'Thai Nguyen',
                TN_7:'Lang Son',
                TN_8:'Bac Giang',
                TN_9:'Quang Ninh'
            },
            DistrictSheetID: '1jOv3NhRoONz2MTtoAkOow_P6rInJEJe9ASy-4wYjCIk',
            ProvinceSheetID: '1XlV8zzaAAA9RR2G-hx8S1l43n_o46NPQ-XVwybDPAZA'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'BB_DBB',
            ProvinceCode: 'PT',
            District: {
                PT_1:'Cam Khe',
                PT_2:'Doan Hung',
                PT_3:'Ha Hoa',
                PT_4:'Lam Thao',
                PT_5:'Phu Ninh',
                PT_6:'TX Phu Tho', 
                PT_7:'Tam Nong',
                PT_8:'Tan Son',
                PT_9:'Thanh Ba',
                PT_10:'Thanh Son',
                PT_11:'Thanh Thuy',
                PT_12:'Viet Tri',
                PT_13:'Yen Lap'
            },
            DistrictSheetID: '13SB6gZgnT7Nvr376_f_vWllUpT6VlFX_f_BN0leGOXQ',
            ProvinceSheetID: '1XlV8zzaAAA9RR2G-hx8S1l43n_o46NPQ-XVwybDPAZA'
        }
    ]

