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
    CM_1: 'Cai Nuoc', 
    CM_2: 'Dam Doi',
    CM_3: 'Nam Can',
    CM_4: 'Ngoc Hien',
    CM_5: 'Phu Tan',
    CM_6: 'Thoi Binh',
    CM_7: 'Tp Ca Mau',
    CM_8: 'Tran Van Thoi',
    CM_9: 'U Minh',

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

    
}

const MngProv = 
    [
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
            },
            DistrictSheetID: '18O7ZRv_lLPf7w8Fd_C-X3lkYZG9R3znaIMWj9eScfKU',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'BT',
            District: {},
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
            District: {},
            DistrictSheetID: '1Ld2ahnIrJxQk-LLPOh5bfKSEKCYu666AWbNAEVaMt-s',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'DT',
            District: {},
            DistrictSheetID: '1s5pI5IQvDPb5Un0pGGbyLomuqrMSL8dvJCAT20d6G08',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'HG',
            District: {},
            DistrictSheetID: '1-iN7UdkUZ63goORUkKYfxqtdDO0f5rBcDwPjAVwEgPw',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'KG',
            District: {},
            DistrictSheetID: '1-okxVMtBKirEhzglBM_vFIBbu06I5mvM0uLI36NHweI',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A' 
        },
        {
            Country: 'Viet Nam',
            AreaCode: 'NB_DBSCL',
            ProvinceCode: 'LA',
            District: {},
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
            District: {},
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
            District: {},
            DistrictSheetID: '16gSxMWCK96ypKFwqg1B6dZeu2Dm4NLFUIYrCLgtyXAY',
            ProvinceSheetID: '1uXdMGmYm8LQmbsjznC_Rt_EYx2Sh4ElDNJ-AX2BjU5A'
        }
    ]

