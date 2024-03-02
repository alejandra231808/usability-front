import { problems } from './HeuristicEvaluation.vue';

export function getPercentage(type) {
const total = problems.value.reduce((sum, item) => sum + item[type], 0);
return (total / problems.value.length) * 100;
}
