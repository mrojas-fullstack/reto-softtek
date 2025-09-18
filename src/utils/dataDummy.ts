import iconUser from '../assets/planes/iconUser.svg'
import iconProtection from '../assets/planes/iconProtection.svg'
import iconHome from '../assets/planes/iconHome.svg'
import iconHospital from '../assets/planes/iconHospital.svg'

export const cards = [
    {
      icon: iconUser,
      title: 'Para mí',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    },
    {
      icon: iconProtection,
      title: 'Para alguien más',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    }
];

export const cardsPlanesUser = [
    {
      recomended: false,
      icon: iconHome
    },
    {
      recomended: true,
      icon: iconHospital
    },
    {
      recomended: false,
      icon: iconHome
    }
];

export const cardsPlanesProtection = [
    {
      recomended: false,
      icon: iconHome,
      title: 'Plan en Casa',
      mark: '$39 antes',
      cost: '$37.05 al mes',
      description: [
        'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
        'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
        'Indemnización de S/300 en caso de hospitalización por más de un día.'
      ],
    },
    {
      recomended: true,
      icon: iconHospital,
      title: 'Plan en Casa y Clínica',
      mark: '$99 antes',
      cost: '$94.05 al mes',
      description: [
        'Consultas en clínica para cualquier especialidad.',
        'Medicinas y exámenes derivados cubiertos al 80%',
        'Atención médica en más de 200 clínicas del país.'
      ],
    },
    {
      recomended: false,
      icon: iconHome,
      title: 'Plan en Casa + Chequeo ',
      mark: '$49 antes',
      cost: '$46.55 al mes',
      description: [
        'Un Chequeo preventivo general de manera presencial o virtual.',
        'Acceso a Vacunas en el Programa del MINSA en centros privados.',
        'Incluye todos los beneficios del Plan en Casa.'
      ],
    }
];

export const cardsPlanes = [
  cardsPlanesUser,
  cardsPlanesProtection
];