const getAnasayfaPage = (req, res) => {
    res.render('anasayfa', {
        link: 'anasayfa',
    });
};

const getgeziRehberiPage = (req, res) => {
    res.render('geziRehberi', {
        link: 'geziRehberi',
    });
};

const getTokyoPage = (req, res) => {
    res.render('tokyo', {
        link: 'tokyo',
    });
};

const getKyotoPage = (req, res) => {
    res.render('kyoto', {
        link: 'kyoto',
    });
};

const getOsakaPage = (req, res) => {
    res.render('osaka', {
        link: 'osaka',
    });
};

const getNaraPage = (req, res) => {
    res.render('nara', {
        link: 'nara',
    });
};

const getFujidagiPage = (req, res) => {
    res.render('fujidagi', {
        link: 'fujidagi',
    });
};

const getHiroshimaPage = (req, res) => {
    res.render('hiroshima', {
        link: 'hiroshima',
    });
};

const getBasvuruPage = (req, res) => {
    res.render('basvuru', {
        link: 'basvuru',
    });
};

const getYorumPage = (req, res) => {
    res.render('yorum', {
        link: 'yorum',
    });
};


export {getAnasayfaPage, getgeziRehberiPage, getFujidagiPage, getTokyoPage, getKyotoPage, getOsakaPage, getNaraPage, getHiroshimaPage, getBasvuruPage, getYorumPage}