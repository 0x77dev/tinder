namespace Interfaces {
  export interface Meta {
    status: number;
  }

  export interface Likes {
    likes_remaining: number;
  }

  export interface PaymentMethod {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData {
    amount: number;
    offer_type: string;
    refresh_interval: number;
    refresh_interval_unit: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod[];
  }

  export interface HideAds {
    type: string;
  }

  export interface HideAge {
    type: string;
  }

  export interface HideDistance {
    type: string;
  }

  export interface Like {
    type: string;
  }

  export interface ControlWhoSeesYou {
    type: string;
  }

  export interface Passport {
    type: string;
  }

  export interface Rewind {
    type: string;
  }

  export interface SuperboostAlcAccess {
    type: string;
  }

  export interface ControlWhoYouSee {
    type: string;
  }

  export interface Data2 {
    hide_ads: HideAds;
    hide_age: HideAge;
    hide_distance: HideDistance;
    like: Like;
    control_who_sees_you: ControlWhoSeesYou;
    passport: Passport;
    rewind: Rewind;
    superboost_alc_access: SuperboostAlcAccess;
    control_who_you_see: ControlWhoYouSee;
  }

  export interface Ordering {
    carousel: string[];
    plus_screen: string[];
  }

  export interface Benefit {
    key: string;
    heading: string;
    included: boolean;
    description: string;
  }

  export interface Section {
    type: string;
    heading: string;
    benefits: Benefit[];
  }

  export interface SubPageData {
    termed: boolean;
    sections: Section[];
  }

  export interface Merchandising {
    data: Data2;
    ordering: Ordering;
    sub_page_data: SubPageData;
  }

  export interface Plus {
    purchase_type: string;
    product_data: ProductData[];
    merchandising: Merchandising;
  }

  export interface PaymentMethod2 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData2 {
    amount: number;
    offer_type: string;
    refresh_interval: number;
    refresh_interval_unit: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod2[];
  }

  export interface RenewalData {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Superlike {
    type: string;
    renewal_data: RenewalData;
  }

  export interface RenewalData2 {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Boost {
    type: string;
    renewal_data: RenewalData2;
  }

  export interface HideAds2 {
    type: string;
  }

  export interface HideAge2 {
    type: string;
  }

  export interface HideDistance2 {
    type: string;
  }

  export interface Like2 {
    type: string;
  }

  export interface ControlWhoSeesYou2 {
    type: string;
  }

  export interface Passport2 {
    type: string;
  }

  export interface Rewind2 {
    type: string;
  }

  export interface SuperboostAlcAccess2 {
    type: string;
  }

  export interface ControlWhoYouSee2 {
    type: string;
  }

  export interface RenewalData3 {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Toppicks {
    type: string;
    renewal_data: RenewalData3;
  }

  export interface ToppicksAlcAccess {
    type: string;
  }

  export interface LikesYou {
    type: string;
  }

  export interface Data3 {
    superlike: Superlike;
    boost: Boost;
    hide_ads: HideAds2;
    hide_age: HideAge2;
    hide_distance: HideDistance2;
    like: Like2;
    control_who_sees_you: ControlWhoSeesYou2;
    passport: Passport2;
    rewind: Rewind2;
    superboost_alc_access: SuperboostAlcAccess2;
    control_who_you_see: ControlWhoYouSee2;
    toppicks: Toppicks;
    toppicks_alc_access: ToppicksAlcAccess;
    likes_you: LikesYou;
  }

  export interface Ordering2 {
    carousel: string[];
    plus_screen: string[];
  }

  export interface Benefit2 {
    key: string;
    heading: string;
    included: boolean;
    description: string;
  }

  export interface Section2 {
    type: string;
    heading: string;
    benefits: Benefit2[];
  }

  export interface SubPageData2 {
    termed: boolean;
    sections: Section2[];
  }

  export interface Merchandising2 {
    data: Data3;
    ordering: Ordering2;
    sub_page_data: SubPageData2;
  }

  export interface Gold {
    purchase_type: string;
    product_data: ProductData2[];
    merchandising: Merchandising2;
  }

  export interface PaymentMethod3 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
    adjustment_price: number;
  }

  export interface ProductData3 {
    amount: number;
    offer_type: string;
    refresh_interval: number;
    refresh_interval_unit: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod3[];
  }

  export interface RenewalData4 {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Superlike2 {
    type: string;
    renewal_data: RenewalData4;
  }

  export interface RenewalData5 {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Boost2 {
    type: string;
    renewal_data: RenewalData5;
  }

  export interface HideAds3 {
    type: string;
  }

  export interface HideAge3 {
    type: string;
  }

  export interface HideDistance3 {
    type: string;
  }

  export interface Like3 {
    type: string;
  }

  export interface ControlWhoSeesYou3 {
    type: string;
  }

  export interface Passport3 {
    type: string;
  }

  export interface Rewind3 {
    type: string;
  }

  export interface SuperboostAlcAccess3 {
    type: string;
  }

  export interface ControlWhoYouSee3 {
    type: string;
  }

  export interface RenewalData6 {
    balance: number;
    refresh_interval: number;
    refresh_interval_unit: string;
  }

  export interface Toppicks2 {
    type: string;
    renewal_data: RenewalData6;
  }

  export interface ToppicksAlcAccess2 {
    type: string;
  }

  export interface LikesYou2 {
    type: string;
  }

  export interface SuperlikeAttachMessage {
    type: string;
  }

  export interface MyLikesLookback {
    type: string;
    duration: number;
  }

  export interface PriorityLikes {
    type: string;
  }

  export interface Data4 {
    superlike: Superlike2;
    boost: Boost2;
    hide_ads: HideAds3;
    hide_age: HideAge3;
    hide_distance: HideDistance3;
    like: Like3;
    control_who_sees_you: ControlWhoSeesYou3;
    passport: Passport3;
    rewind: Rewind3;
    superboost_alc_access: SuperboostAlcAccess3;
    control_who_you_see: ControlWhoYouSee3;
    toppicks: Toppicks2;
    toppicks_alc_access: ToppicksAlcAccess2;
    likes_you: LikesYou2;
    superlike_attach_message: SuperlikeAttachMessage;
    my_likes_lookback: MyLikesLookback;
    priority_likes: PriorityLikes;
  }

  export interface Ordering3 {
    carousel: string[];
    plus_screen: string[];
  }

  export interface Benefit3 {
    key: string;
    heading: string;
    included: boolean;
    description: string;
  }

  export interface Section3 {
    type: string;
    heading: string;
    benefits: Benefit3[];
  }

  export interface SubPageData3 {
    termed: boolean;
    sections: Section3[];
  }

  export interface Merchandising3 {
    data: Data4;
    ordering: Ordering3;
    sub_page_data: SubPageData3;
  }

  export interface Platinum {
    purchase_type: string;
    product_data: ProductData3[];
    merchandising: Merchandising3;
  }

  export interface PaymentMethod4 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData4 {
    amount: number;
    offer_type: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod4[];
  }

  export interface Merchandising4 {
    upsell: string;
  }

  export interface Boost3 {
    purchase_type: string;
    product_data: ProductData4[];
    merchandising: Merchandising4;
  }

  export interface PaymentMethod5 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData5 {
    amount: number;
    offer_type: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod5[];
  }

  export interface Merchandising5 {
  }

  export interface Readreceipt {
    purchase_type: string;
    product_data: ProductData5[];
    merchandising: Merchandising5;
  }

  export interface PaymentMethod6 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData6 {
    amount: number;
    offer_type: string;
    tags: string[];
    duration: number;
    icon_url: string;
    payment_methods: PaymentMethod6[];
  }

  export interface Merchandising6 {
  }

  export interface Superboost {
    purchase_type: string;
    product_data: ProductData6[];
    merchandising: Merchandising6;
  }

  export interface PaymentMethod7 {
    platform: string;
    sku_id: string;
    discount: number;
    require_zip: boolean;
    price: number;
    is_vat: boolean;
    tax_rate: number;
    currency: string;
  }

  export interface ProductData7 {
    amount: number;
    offer_type: string;
    tags: string[];
    icon_url: string;
    payment_methods: PaymentMethod7[];
  }

  export interface Merchandising7 {
    upsell: string;
  }

  export interface Superlike3 {
    purchase_type: string;
    product_data: ProductData7[];
    merchandising: Merchandising7;
  }

  export interface Offerings {
    plus: Plus;
    gold: Gold;
    platinum: Platinum;
    boost: Boost3;
    readreceipt: Readreceipt;
    superboost: Superboost;
    superlike: Superlike3;
  }

  export interface PlusControl {
    discoverable_party: string;
    hide_ads: boolean;
    hide_age: boolean;
    hide_distance: boolean;
    blend: string;
  }

  export interface Purchase2 {
    id: string;
    expire_date: number;
    product_type: string;
    purchase_type: string;
    product_id: string;
    terms: number;
    terms_unit: string;
    platform: string;
    email: string;
    is_auto_renewing: boolean;
  }

  export interface Purchase {
    purchases: Purchase2[];
    subscription_expired: boolean;
  }

  export interface Country {
    name: string;
    cc: string;
    alpha3: string;
  }

  export interface PosInfo {
    country: Country;
    timezone: string;
  }

  export interface LanguagePreference {
    language: string;
    is_selected: boolean;
  }

  export interface GlobalMode {
    is_enabled: boolean;
    display_language: string;
    language_preferences: LanguagePreference[];
  }

  export interface AutoExpansion {
    age_toggle: boolean;
    distance_toggle: boolean;
  }

  export interface User2 {
    width_pct: number;
    x_offset_pct: number;
    height_pct: number;
    y_offset_pct: number;
  }

  export interface Algo {
    width_pct: number;
    x_offset_pct: number;
    height_pct: number;
    y_offset_pct: number;
  }

  export interface CropInfo {
    user: User2;
    algo: Algo;
    processed_by_bullseye: boolean;
    user_customized: boolean;
    faces_count: number;
  }

  export interface ProcessedFile {
    url: string;
    height: number;
    width: number;
  }

  export interface Photo {
    id: string;
    crop_info: CropInfo;
    url: string;
    fbId: string;
    processedFiles: ProcessedFile[];
    assets: any[];
    media_type: string;
    selfie_verified?: boolean;
  }

  export interface Company {
    displayed: boolean;
    name: string;
  }

  export interface Title {
    displayed: boolean;
    name: string;
  }

  export interface Job {
    company: Company;
    title: Title;
  }

  export interface School {
    name: string;
    displayed: boolean;
  }

  export interface Badge {
    type: string;
  }

  export interface Pos {
    lat: number;
    lon: number;
  }

  export interface BillingInfo {
    email: string;
    has_credit_card_on_file: boolean;
    supported_payment_methods: string[];
  }

  export interface City {
    name: string;
    region: string;
  }

  export interface ShowSameOrientationFirst {
    checked: boolean;
    should_show_option: boolean;
  }

  export interface SexualOrientation {
    id: string;
    name: string;
  }

  export interface SelectedInterest {
    id: string;
    name: string;
  }

  export interface AvailableInterest {
    id: string;
    name: string;
  }

  export interface UserInterests {
    selected_interests: SelectedInterest[];
    available_interests: AvailableInterest[];
    min_interests: number;
    max_interests: number;
  }

  export interface IconUrl {
    url: string;
    quality: string;
    width: number;
    height: number;
  }

  export interface ChoiceSelection {
    id: string;
    name: string;
  }

  export interface SelectedDescriptor {
    id: string;
    name: string;
    type: string;
    visibility: string;
    icon_url: string;
    icon_urls: IconUrl[];
    choice_selections: ChoiceSelection[];
  }

  export interface PreferenceFilters {
  }

  export interface User {
    _id: string;
    age_filter_max: number;
    age_filter_min: number;
    bio: string;
    birth_date: Date;
    create_date: Date;
    crm_id: string;
    pos_info: PosInfo;
    discoverable: boolean;
    distance_filter: number;
    global_mode: GlobalMode;
    auto_expansion: AutoExpansion;
    gender: number;
    gender_filter: number;
    show_gender_on_profile: boolean;
    name: string;
    photos: Photo[];
    photos_processing: boolean;
    photo_optimizer_enabled: boolean;
    ping_time: Date;
    jobs: Job[];
    schools: School[];
    badges: Badge[];
    username: string;
    phone_id: string;
    interested_in: number[];
    pos: Pos;
    billing_info: BillingInfo;
    autoplay_video: string;
    top_picks_discoverable: boolean;
    photo_tagging_enabled: boolean;
    city: City;
    show_orientation_on_profile: boolean;
    show_same_orientation_first: ShowSameOrientationFirst;
    sexual_orientations: SexualOrientation[];
    user_interests: UserInterests;
    recommended_sort_discoverable: boolean;
    selfie_verification: string;
    noonlight_protected: boolean;
    sync_swipe_enabled: boolean;
    selected_descriptors: SelectedDescriptor[];
    request_verification_enabled: boolean;
    preference_filters: PreferenceFilters;
  }

  export interface SubExpirationBanner {
    heading: string;
    description: string;
  }

  export interface MiscMerchandising {
    sub_expiration_banner: SubExpirationBanner;
    subscription_card_ordering: string[];
    landing_card: string;
  }

  export interface Profile {
    likes: Likes;
    offerings: Offerings;
    plus_control: PlusControl;
    purchase: Purchase;
    user: User;
    misc_merchandising: MiscMerchandising;
  }

  export interface Response {
    meta: Meta;
    data: Profile;
  }
}

export default Interfaces
