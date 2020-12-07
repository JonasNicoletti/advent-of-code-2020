import { createContext } from 'react';
import { YearItemProps } from './ui/YearItem';

const SolutionContext = createContext<YearItemProps[]>([]);

export default SolutionContext;