import express from 'express';
import * as pageController from "../controllers/pageController.js";


const router = express.Router();

router.route('/').get(pageController.getAnasayfaPage);
router.route('/geziRehberi').get(pageController.getgeziRehberiPage);
router.route('/tokyo').get(pageController.getTokyoPage);
router.route('/kyoto').get(pageController.getKyotoPage);
router.route('/osaka').get(pageController.getOsakaPage);
router.route('/nara').get(pageController.getNaraPage);
router.route('/fujidagi').get(pageController.getFujidagiPage);
router.route('/hiroshima').get(pageController.getHiroshimaPage);
router.route('/basvuru').get(pageController.getBasvuruPage);
router.route('/yorum').get(pageController.getYorumPage);


export default router; 