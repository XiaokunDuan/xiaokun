const _shanghaiNow = new Date(Date.now() + 8 * 3600000);
const _y = _shanghaiNow.getUTCFullYear();
const _m = _shanghaiNow.getUTCMonth();  // 0-indexed
const _d = _shanghaiNow.getUTCDate();
const _age = _y - 2004 - (_m < 2 || (_m === 2 && _d < 27) ? 1 : 0);
const _bd = new Date(2004, 2, 27);  // local-time Date object for the birthday field

module.exports = {
  name: { zh: '段晓坤', en: 'Theo Duan' },
  gender: 'male',
  birthday: _bd,
  age: _age,
  location: { home: 'Beijing', country: 'Mainland China' },
  email: 'i@xiaokun.me',
  github: { id: 'XiaokunDuan', uri: 'https://github.com/XiaokunDuan' },
  x: { id: 'TechMGR', uri: 'https://x.com/TechMGR' },
  homepage: 'https://xiaokunduan.github.io',
  blog: 'https://paragraph.xyz/@xiaokun',
  company: 'ByteDance',
};
