module.exports = {
    postservice: require('./service-post'),
    putservice: require('./service-put'),
    deleteservice: require('./service-delete'),
    getservice: require('./service-get'),
    postserviceLike: require('./service-like-post'),
    postserviceShare: require('./service-share-post'),
    getserviceLike: require('./service-like-get'),
    getserviceShare: require('./service-share-get'),
    deleteserviceLike: require('./service-like-delete'),
    postserviceWatching: require('./service-watching-post'),
    getserviceWatching: require('./service-watching-get'),
    deleteserviceWatching: require('./service-watching-delete'),
    postServiceFlagInappropriate: require('./service-flag-inappropriate-post'),
    getServiceFlagInappropriate: require('./service-flag-inappropriate-get'),
    deleteServiceFlagInappropriate: require('./service-flag-inappropriate-delete'),
    postserviceReview: require('./service-review-post'),
    getserviceReview: require('./service-review-get'),
    getservicesuser: require('./service-user-get'),
    getservicedetail: require('./service-id-detail-get'),
    getserviceRelated: require('./service-id-related-get'),
    getServicesWatching: require('./services-watching-get'),
    getservicesliked: require('./services-liked-get'),
    getLiveOfferSuggestedServices: require('./services-live-offer-suggested-get'),
    getServicesSearch: require('./services-search-get'),
    getServicesToLinkSearch: require('./services-link-search-get'),
    getServicesExplore: require('./services-explore-get'),
    getServicesHomepage: require('./services-homepage-get'),
    getHomepagePublic: require('./services-homepage-public-get'),    
    getServicesMobileHomepage: require('./services-homepage-mobile-get')
};
