import { ComponentsName, validationRules } from './validationRules';

export const validators = (name: ComponentsName, value: string) => {
  const rule = validationRules[name];
  console.log('rule',name,rule)
  return rule && rule.test(value);
};