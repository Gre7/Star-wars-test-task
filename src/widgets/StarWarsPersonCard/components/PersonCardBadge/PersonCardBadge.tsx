import { Badge } from '@chakra-ui/react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export type PersonCardBadgeProps = {
  type?: 'male' | 'female' | 'birthYear' | 'hermaphrodite';
  text: string;
};

const PersonCardBadge = ({ type, text }: PersonCardBadgeProps) => {
  return (
    <Badge
      className={clsx(
        styles['person-card-badge'],
        type && styles[`person-card-badge_${type}`],
      )}
    >
      {text}
    </Badge>
  );
};
export default PersonCardBadge;
