import { getItemKeyFromIndexes } from '../../utils';
import { BaseItemProps } from './types';

export function getItemId(indexes: number[], appendix: string) {
  return `item-${getItemKeyFromIndexes(indexes)}-${appendix}`;
}

/**
 * 从属性中拆分出组件属性和容器属性
 * @param props
 * @param ext
 * @returns
 */
export function getItemProps<T extends BaseItemProps>(
  props: T,
  ext: string[] = [],
) {
  const rest: Record<string, any> = { ...props };
  const base: BaseItemProps = {} as any;

  const keys = ['indexes', 'data', 'datum', 'positionH', 'positionV', ...ext];

  keys.forEach((key) => {
    if (key in rest) {
      base[key] = rest[key];
      delete rest[key];
    }
  });

  return [base, rest] as const;
}
