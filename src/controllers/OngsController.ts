import { Request, Response } from 'express';

import {getRepository} from 'typeorm';
import Ong from '../models/Ong';

import * as Yup from 'yup';

import ongView from '../views/ongs_view';

export default {
  async index(req: Request, res: Response) {
    const ongsRepository = getRepository(Ong);

    const ongs = await ongsRepository.find({
      relations: ['images'],
    });

    return res.json(ongView.renderMany(ongs));
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const ongsRepository = getRepository(Ong);

    const ong = await ongsRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return res.json(ongView.render(ong));
  },
  async create(req: Request, res: Response) {
    const ongsRepository = getRepository(Ong);

    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    let { open_on_weekends } = req.body;
    open_on_weekends = open_on_weekends.toLowerCase() === 'true';

    await schema.validate(
      { ...req.body, open_on_weekends, images },
      { abortEarly: false }
    );

    const ong = ongsRepository.create({
      ...req.body,
      open_on_weekends,
      images,
    });

    await ongsRepository.save(ong);

    return res.status(201).json(ong);
  },
};