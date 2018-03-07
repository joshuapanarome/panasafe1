/**
 * POST a Geolocation
 */
exports.create = (req, h) => {
    
    console.log("*** HEADERS ***");
    console.log(req.headers);
    console.log("*** BODY ***");
    console.log(req.payload);

    return 'ok';
}
