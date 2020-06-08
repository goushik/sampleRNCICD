import styled from 'styled-components/native';
import {dpToPx} from 'constants/responsive';
import sizes from 'constants/sizes';

export const FlexSpace = styled.View`
  flex: 1;
`;

export const ExtraSpace = styled.View<{count?: number}>`
  margin-bottom: ${props => dpToPx((props.count || 1) * sizes.small)}px;
`;
