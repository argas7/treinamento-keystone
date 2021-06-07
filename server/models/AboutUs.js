const keystone = require('keystone');

const { Types } = keystone.Field;

const AboutUs = new keystone.List('AboutUs', {
  autocreate: true,
  nocreate: true,
  nodelete: true,
  defaultColumns: 'mission, vision, virtues',
});

AboutUs.add({
  mission: {
    type: Types.Text,
    initial: true,
    label: 'Missão',
  },
  vision: {
    type: Types.Text,
    initial: true,
    label: 'Visão',
  },
  virtues: {
    type: Types.TextArray,
    initial: true,
    label: 'Valores'
  },
});

AboutUs.register();
