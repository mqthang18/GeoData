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
//                 AreaCode: 'NB_DBNB',
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
    VL: 'Vinh Long'
}

const DistrictList = {
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
        }
    ]

