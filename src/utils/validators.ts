import { ComponentsName, validationRules } from './validationRules';

export const validators = (name: ComponentsName, value: string) => {
  const rule = validationRules[name];
  return rule && rule.test(value);
};