import { type } from 'os';

const pricingTabs = {
  DataCenterProxies: 'DataCenterProxies',
  ResidentialProxies: 'ResidentialProxies',
  ISPProxies: 'ISPProxies',
};

const activeClass = {
  DataCenterProxies: 'active',
  ResidentialProxies: 'active',
  ISPProxies: 'active',
};

type ISPProxies = {
  us: any;
  gb: any;
  ca: any;
  de: any;
};

type DataCenterRadioButtons = {
  us: any;
  gb: any;
  ar: any;
  au: any;
  be: any;
  br: any;
  ca: any;
  co: any;
  cn: any;
  fr: any;
  de: any;
  in: any;
  id: any;
  it: any;
  jp: any;
  mx: any;
  nl: any;
  pk: any;
  ph: any;
  pl: any;
  sg: any;
  kr: any;
  es: any;
  tw: any;
  th: any;
  vn: any;
};

const dataCenterProxyRadio: DataCenterRadioButtons = {
  us: {
    radio: ['dedicated', 'rotating', 'semi-dedicated', 'ipv6'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    rotating: {
      basicPrice: 3.75,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    ipv6: {
      basicPrice: 0.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  gb: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  ar: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  au: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  be: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  br: {
    radio: ['dedicated', 'rotating', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    rotating: {
      basicPrice: 4.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  ca: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  co: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  cn: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  fr: {
    radio: ['dedicated', 'rotating', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    rotating: {
      basicPrice: 4.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  de: {
    radio: ['dedicated', 'rotating', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    rotating: {
      basicPrice: 4.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  in: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  id: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  it: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  jp: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  mx: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.05,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  nl: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  pk: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 1.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  ph: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  pl: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  sg: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  kr: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  es: {
    radio: ['dedicated', 'semi-dedicated'],
    dedicated: {
      basicPrice: 3.0,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
    'semi-dedicated': {
      basicPrice: 1.2,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  tw: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  th: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 2.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
  vn: {
    radio: ['dedicated'],
    dedicated: {
      basicPrice: 3.5,
      oneMonthDisc: 1,
      threeMonthDisc: 0.05,
      sixMonthDisc: 0.1,
      twelveMonthDisc: 0.15,
      starterDisc: 1,
      personalDisc: 0.15,
      corporate: 0.25,
    },
  },
};

const ispProxy: ISPProxies = {
  us: {
    dedicated: {
      price: 5,
      oneMonthDisc: 5,
      threeMonthDisc: 4.75 * 3,
      sixMonthDisc: 4.5 * 6,
      twelveMonthDisc: 4.25 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
    semiDedicated: {
      price: 5,
      oneMonthDisc: 2.5,
      threeMonthDisc: 2.38 * 3,
      sixMonthDisc: 2.25 * 6,
      twelveMonthDisc: 2.13 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
  },
  gb: {
    dedicated: {
      price: 5,
      oneMonthDisc: 5,
      threeMonthDisc: 4.75 * 3,
      sixMonthDisc: 4.5 * 6,
      twelveMonthDisc: 4.25 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
    semiDedicated: {
      price: 5,
      oneMonthDisc: 2.5,
      threeMonthDisc: 2.38 * 3,
      sixMonthDisc: 2.25 * 6,
      twelveMonthDisc: 2.13 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
  },
  ca: {
    dedicated: {
      price: 5,
      oneMonthDisc: 5,
      threeMonthDisc: 4.75 * 3,
      sixMonthDisc: 4.5 * 6,
      twelveMonthDisc: 4.25 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
    semiDedicated: {
      price: 5,
      oneMonthDisc: 2.5,
      threeMonthDisc: 2.38 * 3,
      sixMonthDisc: 2.25 * 6,
      twelveMonthDisc: 2.13 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
  },
  de: {
    dedicated: {
      price: 5,
      oneMonthDisc: 5,
      threeMonthDisc: 4.75 * 3,
      sixMonthDisc: 4.5 * 6,
      twelveMonthDisc: 4.25 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
    semiDedicated: {
      price: 5,
      oneMonthDisc: 2.5,
      threeMonthDisc: 2.38 * 3,
      sixMonthDisc: 2.25 * 6,
      twelveMonthDisc: 2.13 * 12,
      starterDisc: 1,
      personalDisc: 0.04,
      corporate: 0.08,
    },
  },
};

const getKeyValue =
  <T extends object, U extends keyof T>(key: U) =>
  (obj: T) =>
    obj[key];

export {
  pricingTabs,
  activeClass,
  getKeyValue,
  ispProxy,
  dataCenterProxyRadio,
};
