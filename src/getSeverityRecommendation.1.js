import { problems, options, getRecommendation } from './HeuristicEvaluation.vue';

export const getSeverityRecommendation = (percentage) => {
if (percentage < 1) {
return "Severidad Baja: No es un problema de usabilidad.";
} else if (percentage <= 10) {
return "Severidad Baja-Media: Problema 'Cosmético'; no necesita ser resuelto a menos que se disponga de tiempo extra en el proyecto.";
} else if (percentage <= 50) {
return "Severidad Media: Problema de usabilidad menor: arreglarlo tiene baja prioridad.";
} else if (percentage <= 90) {
return "Severidad Alta: Problema de usabilidad mayor: es importante arreglarlo.";
}




const __VLS_componentsOption = {};

let __VLS_name!: 'HeuristicEvaluation';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.table; __VLS_intrinsicElements.table; __VLS_intrinsicElements.table; __VLS_intrinsicElements.table;
__VLS_intrinsicElements.thead; __VLS_intrinsicElements.thead; __VLS_intrinsicElements.thead; __VLS_intrinsicElements.thead;
__VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr;
__VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th;
__VLS_intrinsicElements.tbody; __VLS_intrinsicElements.tbody; __VLS_intrinsicElements.tbody; __VLS_intrinsicElements.tbody;
__VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td;
__VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select;
__VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.h6; __VLS_intrinsicElements.h6;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("row"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("col-sm-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("col-sm-12"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["h1"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["table"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("table table-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("table table-danger"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["thead"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["tr"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["th"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["th"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_48.slots!).default;
}
{
const __VLS_50 = __VLS_intrinsicElements["th"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_53.slots!).default;
}
{
const __VLS_55 = __VLS_intrinsicElements["th"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_58.slots!).default;
}
{
const __VLS_60 = __VLS_intrinsicElements["th"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
(__VLS_63.slots!).default;
}
{
const __VLS_65 = __VLS_intrinsicElements["th"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
{
const __VLS_70 = __VLS_intrinsicElements["th"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
(__VLS_73.slots!).default;
}
(__VLS_38.slots!).default;
}
(__VLS_33.slots!).default;
}
{
const __VLS_75 = __VLS_intrinsicElements["tbody"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.problems)!)) {
{
const __VLS_80 = __VLS_intrinsicElements["tr"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, key: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, key: ((item.name)), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
{
const __VLS_85 = __VLS_intrinsicElements["td"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
(item.name);
(__VLS_88.slots!).default;
}
{
const __VLS_90 = __VLS_intrinsicElements["td"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
(item.description);
(__VLS_93.slots!).default;
}
{
const __VLS_95 = __VLS_intrinsicElements["td"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
(item.hi);
(__VLS_98.slots!).default;
}
{
const __VLS_100 = __VLS_intrinsicElements["td"];
const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
const __VLS_102 = __VLS_101({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
(item.incidents);
(__VLS_103.slots!).default;
}
{
const __VLS_105 = __VLS_intrinsicElements["td"];
const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
{
const __VLS_110 = __VLS_intrinsicElements["div"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
const __VLS_112 = __VLS_111({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, class: (""), });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
let __VLS_114!: __VLS_NormalizeEmits<typeof __VLS_113.emit>;
{
const __VLS_115 = __VLS_intrinsicElements["select"];
const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
const __VLS_117 = __VLS_116({ ...{}, class: ("form-select"), id: ("floatingSelect"), "aria-label": ("Floating label select example"), value: ((item.severity)), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, class: ("form-select"), id: ("floatingSelect"), "aria-label": ("Floating label select example"), value: ((item.severity)), });
const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
let __VLS_119!: __VLS_NormalizeEmits<typeof __VLS_118.emit>;
for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options)!)) {
{
const __VLS_120 = __VLS_intrinsicElements["option"];
const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
const __VLS_122 = __VLS_121({ ...{}, key: ((option.value)), value: ((option.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_120, typeof __VLS_122> & Record<string, unknown>) => void)({ ...{}, key: ((option.value)), value: ((option.value)), });
const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
let __VLS_124!: __VLS_NormalizeEmits<typeof __VLS_123.emit>;
(option.text);
(__VLS_123.slots!).default;
}
// @ts-ignore
[problems, options,];
}
(__VLS_118.slots!).default;
}
(__VLS_113.slots!).default;
}
(__VLS_108.slots!).default;
}
{
const __VLS_125 = __VLS_intrinsicElements["td"];
const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
const __VLS_127 = __VLS_126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_125, typeof __VLS_127> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
let __VLS_129!: __VLS_NormalizeEmits<typeof __VLS_128.emit>;
{
const __VLS_130 = __VLS_intrinsicElements["div"];
const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
const __VLS_132 = __VLS_131({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, class: (""), });
const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
let __VLS_134!: __VLS_NormalizeEmits<typeof __VLS_133.emit>;
{
const __VLS_135 = __VLS_intrinsicElements["select"];
const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
const __VLS_137 = __VLS_136({ ...{}, class: ("form-select"), id: ("floatingSelect"), "aria-label": ("Floating label select example"), value: ((item.frequency)), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, class: ("form-select"), id: ("floatingSelect"), "aria-label": ("Floating label select example"), value: ((item.frequency)), });
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
let __VLS_139!: __VLS_NormalizeEmits<typeof __VLS_138.emit>;
for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options)!)) {
{
const __VLS_140 = __VLS_intrinsicElements["option"];
const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
const __VLS_142 = __VLS_141({ ...{}, key: ((option.value)), value: ((option.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, key: ((option.value)), value: ((option.value)), });
const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
(option.text);
(__VLS_143.slots!).default;
}
// @ts-ignore
[options,];
}
(__VLS_138.slots!).default;
}
(__VLS_133.slots!).default;
}
(__VLS_128.slots!).default;
}
{
const __VLS_145 = __VLS_intrinsicElements["td"];
const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
const __VLS_147 = __VLS_146({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
(item.criticism = item.severity + item.frequency);
(__VLS_148.slots!).default;
}
(__VLS_83.slots!).default;
}
}
{
const __VLS_150 = __VLS_intrinsicElements["tr"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
const __VLS_152 = __VLS_151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
{
const __VLS_155 = __VLS_intrinsicElements["td"];
const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
let __VLS_159!: __VLS_NormalizeEmits<typeof __VLS_158.emit>;
(__VLS_158.slots!).default;
}
{
const __VLS_160 = __VLS_intrinsicElements["td"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
}
{
const __VLS_165 = __VLS_intrinsicElements["td"];
const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
}
{
const __VLS_170 = __VLS_intrinsicElements["td"];
const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
}
{
const __VLS_175 = __VLS_intrinsicElements["td"];
const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
const __VLS_177 = __VLS_176({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
let __VLS_179!: __VLS_NormalizeEmits<typeof __VLS_178.emit>;
(__VLS_ctx.getColumnSum('severity'));
(__VLS_178.slots!).default;
}
{
const __VLS_180 = __VLS_intrinsicElements["td"];
const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
const __VLS_182 = __VLS_181({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_180, typeof __VLS_182> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182)!;
let __VLS_184!: __VLS_NormalizeEmits<typeof __VLS_183.emit>;
(__VLS_ctx.getColumnSum('frequency'));
(__VLS_183.slots!).default;
}
{
const __VLS_185 = __VLS_intrinsicElements["td"];
const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_185, typeof __VLS_187> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
let __VLS_189!: __VLS_NormalizeEmits<typeof __VLS_188.emit>;
(__VLS_ctx.getColumnSum('criticism'));
(__VLS_188.slots!).default;
}
(__VLS_153.slots!).default;
}
{
const __VLS_190 = __VLS_intrinsicElements["tr"];
const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
const __VLS_192 = __VLS_191({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_190, typeof __VLS_192> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192)!;
let __VLS_194!: __VLS_NormalizeEmits<typeof __VLS_193.emit>;
{
const __VLS_195 = __VLS_intrinsicElements["td"];
const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
const __VLS_197 = __VLS_196({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_195, typeof __VLS_197> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
let __VLS_199!: __VLS_NormalizeEmits<typeof __VLS_198.emit>;
(__VLS_198.slots!).default;
}
{
const __VLS_200 = __VLS_intrinsicElements["td"];
const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
const __VLS_202 = __VLS_201({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_200, typeof __VLS_202> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202)!;
let __VLS_204!: __VLS_NormalizeEmits<typeof __VLS_203.emit>;
}
{
const __VLS_205 = __VLS_intrinsicElements["td"];
const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
const __VLS_207 = __VLS_206({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_207> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
let __VLS_209!: __VLS_NormalizeEmits<typeof __VLS_208.emit>;
}
{
const __VLS_210 = __VLS_intrinsicElements["td"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212)!;
let __VLS_214!: __VLS_NormalizeEmits<typeof __VLS_213.emit>;
}
{
const __VLS_215 = __VLS_intrinsicElements["td"];
const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
const __VLS_217 = __VLS_216({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
(__VLS_ctx.getPercentage('severity'));
(__VLS_218.slots!).default;
}
{
const __VLS_220 = __VLS_intrinsicElements["td"];
const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
const __VLS_222 = __VLS_221({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
(__VLS_ctx.getPercentage('frequency'));
(__VLS_223.slots!).default;
}
{
const __VLS_225 = __VLS_intrinsicElements["td"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
(__VLS_ctx.getPercentage('criticism'));
(__VLS_228.slots!).default;
}
(__VLS_193.slots!).default;
}
{
const __VLS_230 = __VLS_intrinsicElements["tr"];
const __VLS_231 = __VLS_elementAsFunctionalComponent(__VLS_230);
const __VLS_232 = __VLS_231({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
{
const __VLS_235 = __VLS_intrinsicElements["td"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
const __VLS_237 = __VLS_236({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237)!;
let __VLS_239!: __VLS_NormalizeEmits<typeof __VLS_238.emit>;
(__VLS_238.slots!).default;
}
{
const __VLS_240 = __VLS_intrinsicElements["td"];
const __VLS_241 = __VLS_elementAsFunctionalComponent(__VLS_240);
const __VLS_242 = __VLS_241({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_240, typeof __VLS_242> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242)!;
let __VLS_244!: __VLS_NormalizeEmits<typeof __VLS_243.emit>;
}
{
const __VLS_245 = __VLS_intrinsicElements["td"];
const __VLS_246 = __VLS_elementAsFunctionalComponent(__VLS_245);
const __VLS_247 = __VLS_246({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_245, typeof __VLS_247> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247)!;
let __VLS_249!: __VLS_NormalizeEmits<typeof __VLS_248.emit>;
}
{
const __VLS_250 = __VLS_intrinsicElements["td"];
const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
const __VLS_252 = __VLS_251({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
}
{
const __VLS_255 = __VLS_intrinsicElements["td"];
const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
const __VLS_257 = __VLS_256({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
let __VLS_259!: __VLS_NormalizeEmits<typeof __VLS_258.emit>;
(__VLS_ctx.getRecommendation(__VLS_ctx.getPercentage('frequency')));
(__VLS_258.slots!).default;
}
(__VLS_233.slots!).default;
}
(__VLS_78.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_260 = __VLS_intrinsicElements["button"];
const __VLS_261 = __VLS_elementAsFunctionalComponent(__VLS_260);
const __VLS_262 = __VLS_261({ ...{ onClick: {} as any, }, class: ("btn btn-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_260, typeof __VLS_262> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("btn btn-primary"), });
const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262)!;
let __VLS_264!: __VLS_NormalizeEmits<typeof __VLS_263.emit>;
let __VLS_265 = { 'click': __VLS_pickEvent(__VLS_264['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_261, typeof __VLS_262>).onClick) };
__VLS_265 = {
click: $event => {
__VLS_ctx.saveEvaluation();
// @ts-ignore
[getColumnSum, getColumnSum, getColumnSum, getPercentage, getPercentage, getPercentage, getRecommendation, getPercentage, saveEvaluation,];
}
};
(__VLS_263.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_266 = __VLS_intrinsicElements["div"];
const __VLS_267 = __VLS_elementAsFunctionalComponent(__VLS_266);
const __VLS_268 = __VLS_267({ ...{}, class: ("col-sm-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_266, typeof __VLS_268> & Record<string, unknown>) => void)({ ...{}, class: ("col-sm-12"), });
const __VLS_269 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268)!;
let __VLS_270!: __VLS_NormalizeEmits<typeof __VLS_269.emit>;
{
const __VLS_271 = __VLS_intrinsicElements["h1"];
const __VLS_272 = __VLS_elementAsFunctionalComponent(__VLS_271);
const __VLS_273 = __VLS_272({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_272));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_271, typeof __VLS_273> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_274 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273)!;
let __VLS_275!: __VLS_NormalizeEmits<typeof __VLS_274.emit>;
(__VLS_274.slots!).default;
}
{
const __VLS_276 = __VLS_intrinsicElements["div"];
const __VLS_277 = __VLS_elementAsFunctionalComponent(__VLS_276);
const __VLS_278 = __VLS_277({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_277));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_276, typeof __VLS_278> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_279 = __VLS_pickFunctionalComponentCtx(__VLS_276, __VLS_278)!;
let __VLS_280!: __VLS_NormalizeEmits<typeof __VLS_279.emit>;
{
const __VLS_281 = __VLS_intrinsicElements["h1"];
const __VLS_282 = __VLS_elementAsFunctionalComponent(__VLS_281);
const __VLS_283 = __VLS_282({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_282));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_281, typeof __VLS_283> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_284 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283)!;
let __VLS_285!: __VLS_NormalizeEmits<typeof __VLS_284.emit>;
(__VLS_284.slots!).default;
}
{
const __VLS_286 = __VLS_intrinsicElements["h6"];
const __VLS_287 = __VLS_elementAsFunctionalComponent(__VLS_286);
const __VLS_288 = __VLS_287({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_287));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_286, typeof __VLS_288> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_289 = __VLS_pickFunctionalComponentCtx(__VLS_286, __VLS_288)!;
let __VLS_290!: __VLS_NormalizeEmits<typeof __VLS_289.emit>;
(__VLS_289.slots!).default;
}
{
const __VLS_291 = __VLS_intrinsicElements["table"];
const __VLS_292 = __VLS_elementAsFunctionalComponent(__VLS_291);
const __VLS_293 = __VLS_292({ ...{}, class: ("table table-warning"), style: (({ width: '600px', height: '300px' })), }, ...__VLS_functionalComponentArgsRest(__VLS_292));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_291, typeof __VLS_293> & Record<string, unknown>) => void)({ ...{}, class: ("table table-warning"), style: (({ width: '600px', height: '300px' })), });
const __VLS_294 = __VLS_pickFunctionalComponentCtx(__VLS_291, __VLS_293)!;
let __VLS_295!: __VLS_NormalizeEmits<typeof __VLS_294.emit>;
{
const __VLS_296 = __VLS_intrinsicElements["thead"];
const __VLS_297 = __VLS_elementAsFunctionalComponent(__VLS_296);
const __VLS_298 = __VLS_297({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_297));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_296, typeof __VLS_298> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_299 = __VLS_pickFunctionalComponentCtx(__VLS_296, __VLS_298)!;
let __VLS_300!: __VLS_NormalizeEmits<typeof __VLS_299.emit>;
{
const __VLS_301 = __VLS_intrinsicElements["tr"];
const __VLS_302 = __VLS_elementAsFunctionalComponent(__VLS_301);
const __VLS_303 = __VLS_302({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_302));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_301, typeof __VLS_303> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_304 = __VLS_pickFunctionalComponentCtx(__VLS_301, __VLS_303)!;
let __VLS_305!: __VLS_NormalizeEmits<typeof __VLS_304.emit>;
{
const __VLS_306 = __VLS_intrinsicElements["th"];
const __VLS_307 = __VLS_elementAsFunctionalComponent(__VLS_306);
const __VLS_308 = __VLS_307({ ...{}, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_307));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_306, typeof __VLS_308> & Record<string, unknown>) => void)({ ...{}, scope: ("col"), });
const __VLS_309 = __VLS_pickFunctionalComponentCtx(__VLS_306, __VLS_308)!;
let __VLS_310!: __VLS_NormalizeEmits<typeof __VLS_309.emit>;
(__VLS_309.slots!).default;
}
{
const __VLS_311 = __VLS_intrinsicElements["th"];
const __VLS_312 = __VLS_elementAsFunctionalComponent(__VLS_311);
const __VLS_313 = __VLS_312({ ...{}, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_312));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_311, typeof __VLS_313> & Record<string, unknown>) => void)({ ...{}, scope: ("col"), });
const __VLS_314 = __VLS_pickFunctionalComponentCtx(__VLS_311, __VLS_313)!;
let __VLS_315!: __VLS_NormalizeEmits<typeof __VLS_314.emit>;
(__VLS_314.slots!).default;
}
{
const __VLS_316 = __VLS_intrinsicElements["th"];
const __VLS_317 = __VLS_elementAsFunctionalComponent(__VLS_316);
const __VLS_318 = __VLS_317({ ...{}, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_317));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_316, typeof __VLS_318> & Record<string, unknown>) => void)({ ...{}, scope: ("col"), });
const __VLS_319 = __VLS_pickFunctionalComponentCtx(__VLS_316, __VLS_318)!;
let __VLS_320!: __VLS_NormalizeEmits<typeof __VLS_319.emit>;
(__VLS_319.slots!).default;
}
(__VLS_304.slots!).default;
}
(__VLS_299.slots!).default;
}
{
const __VLS_321 = __VLS_intrinsicElements["tbody"];
const __VLS_322 = __VLS_elementAsFunctionalComponent(__VLS_321);
const __VLS_323 = __VLS_322({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_322));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_321, typeof __VLS_323> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_324 = __VLS_pickFunctionalComponentCtx(__VLS_321, __VLS_323)!;
let __VLS_325!: __VLS_NormalizeEmits<typeof __VLS_324.emit>;
{
const __VLS_326 = __VLS_intrinsicElements["tr"];
const __VLS_327 = __VLS_elementAsFunctionalComponent(__VLS_326);
const __VLS_328 = __VLS_327({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_327));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_326, typeof __VLS_328> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_329 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328)!;
let __VLS_330!: __VLS_NormalizeEmits<typeof __VLS_329.emit>;
{
const __VLS_331 = __VLS_intrinsicElements["th"];
const __VLS_332 = __VLS_elementAsFunctionalComponent(__VLS_331);
const __VLS_333 = __VLS_332({ ...{}, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_332));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_331, typeof __VLS_333> & Record<string, unknown>) => void)({ ...{}, scope: ("row"), });
const __VLS_334 = __VLS_pickFunctionalComponentCtx(__VLS_331, __VLS_333)!;
let __VLS_335!: __VLS_NormalizeEmits<typeof __VLS_334.emit>;
(__VLS_334.slots!).default;
}
{
const __VLS_336 = __VLS_intrinsicElements["td"];
const __VLS_337 = __VLS_elementAsFunctionalComponent(__VLS_336);
const __VLS_338 = __VLS_337({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_337));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_336, typeof __VLS_338> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_339 = __VLS_pickFunctionalComponentCtx(__VLS_336, __VLS_338)!;
let __VLS_340!: __VLS_NormalizeEmits<typeof __VLS_339.emit>;
(__VLS_339.slots!).default;
}
{
const __VLS_341 = __VLS_intrinsicElements["td"];
const __VLS_342 = __VLS_elementAsFunctionalComponent(__VLS_341);
const __VLS_343 = __VLS_342({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_342));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_341, typeof __VLS_343> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_344 = __VLS_pickFunctionalComponentCtx(__VLS_341, __VLS_343)!;
let __VLS_345!: __VLS_NormalizeEmits<typeof __VLS_344.emit>;
("<");
(__VLS_344.slots!).default;
}
(__VLS_329.slots!).default;
}
{
const __VLS_346 = __VLS_intrinsicElements["tr"];
const __VLS_347 = __VLS_elementAsFunctionalComponent(__VLS_346);
const __VLS_348 = __VLS_347({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_347));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_346, typeof __VLS_348> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_349 = __VLS_pickFunctionalComponentCtx(__VLS_346, __VLS_348)!;
let __VLS_350!: __VLS_NormalizeEmits<typeof __VLS_349.emit>;
{
const __VLS_351 = __VLS_intrinsicElements["th"];
const __VLS_352 = __VLS_elementAsFunctionalComponent(__VLS_351);
const __VLS_353 = __VLS_352({ ...{}, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_352));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_351, typeof __VLS_353> & Record<string, unknown>) => void)({ ...{}, scope: ("row"), });
const __VLS_354 = __VLS_pickFunctionalComponentCtx(__VLS_351, __VLS_353)!;
let __VLS_355!: __VLS_NormalizeEmits<typeof __VLS_354.emit>;
(__VLS_354.slots!).default;
}
{
const __VLS_356 = __VLS_intrinsicElements["td"];
const __VLS_357 = __VLS_elementAsFunctionalComponent(__VLS_356);
const __VLS_358 = __VLS_357({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_357));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_356, typeof __VLS_358> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_359 = __VLS_pickFunctionalComponentCtx(__VLS_356, __VLS_358)!;
let __VLS_360!: __VLS_NormalizeEmits<typeof __VLS_359.emit>;
(__VLS_359.slots!).default;
}
{
const __VLS_361 = __VLS_intrinsicElements["td"];
const __VLS_362 = __VLS_elementAsFunctionalComponent(__VLS_361);
const __VLS_363 = __VLS_362({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_362));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_361, typeof __VLS_363> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_364 = __VLS_pickFunctionalComponentCtx(__VLS_361, __VLS_363)!;
let __VLS_365!: __VLS_NormalizeEmits<typeof __VLS_364.emit>;
(__VLS_364.slots!).default;
}
(__VLS_349.slots!).default;
}
{
const __VLS_366 = __VLS_intrinsicElements["tr"];
const __VLS_367 = __VLS_elementAsFunctionalComponent(__VLS_366);
const __VLS_368 = __VLS_367({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_367));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_366, typeof __VLS_368> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_369 = __VLS_pickFunctionalComponentCtx(__VLS_366, __VLS_368)!;
let __VLS_370!: __VLS_NormalizeEmits<typeof __VLS_369.emit>;
{
const __VLS_371 = __VLS_intrinsicElements["th"];
const __VLS_372 = __VLS_elementAsFunctionalComponent(__VLS_371);
const __VLS_373 = __VLS_372({ ...{}, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_372));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_371, typeof __VLS_373> & Record<string, unknown>) => void)({ ...{}, scope: ("row"), });
const __VLS_374 = __VLS_pickFunctionalComponentCtx(__VLS_371, __VLS_373)!;
let __VLS_375!: __VLS_NormalizeEmits<typeof __VLS_374.emit>;
(__VLS_374.slots!).default;
}
{
const __VLS_376 = __VLS_intrinsicElements["td"];
const __VLS_377 = __VLS_elementAsFunctionalComponent(__VLS_376);
const __VLS_378 = __VLS_377({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_377));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_376, typeof __VLS_378> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_379 = __VLS_pickFunctionalComponentCtx(__VLS_376, __VLS_378)!;
let __VLS_380!: __VLS_NormalizeEmits<typeof __VLS_379.emit>;
(__VLS_379.slots!).default;
}
{
const __VLS_381 = __VLS_intrinsicElements["td"];
const __VLS_382 = __VLS_elementAsFunctionalComponent(__VLS_381);
const __VLS_383 = __VLS_382({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_382));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_381, typeof __VLS_383> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_384 = __VLS_pickFunctionalComponentCtx(__VLS_381, __VLS_383)!;
let __VLS_385!: __VLS_NormalizeEmits<typeof __VLS_384.emit>;
(__VLS_384.slots!).default;
}
(__VLS_369.slots!).default;
}
{
const __VLS_386 = __VLS_intrinsicElements["tr"];
const __VLS_387 = __VLS_elementAsFunctionalComponent(__VLS_386);
const __VLS_388 = __VLS_387({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_387));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_386, typeof __VLS_388> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_389 = __VLS_pickFunctionalComponentCtx(__VLS_386, __VLS_388)!;
let __VLS_390!: __VLS_NormalizeEmits<typeof __VLS_389.emit>;
{
const __VLS_391 = __VLS_intrinsicElements["th"];
const __VLS_392 = __VLS_elementAsFunctionalComponent(__VLS_391);
const __VLS_393 = __VLS_392({ ...{}, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_392));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_391, typeof __VLS_393> & Record<string, unknown>) => void)({ ...{}, scope: ("row"), });
const __VLS_394 = __VLS_pickFunctionalComponentCtx(__VLS_391, __VLS_393)!;
let __VLS_395!: __VLS_NormalizeEmits<typeof __VLS_394.emit>;
(__VLS_394.slots!).default;
}
{
const __VLS_396 = __VLS_intrinsicElements["td"];
const __VLS_397 = __VLS_elementAsFunctionalComponent(__VLS_396);
const __VLS_398 = __VLS_397({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_397));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_396, typeof __VLS_398> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_399 = __VLS_pickFunctionalComponentCtx(__VLS_396, __VLS_398)!;
let __VLS_400!: __VLS_NormalizeEmits<typeof __VLS_399.emit>;
(__VLS_399.slots!).default;
}
{
const __VLS_401 = __VLS_intrinsicElements["td"];
const __VLS_402 = __VLS_elementAsFunctionalComponent(__VLS_401);
const __VLS_403 = __VLS_402({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_402));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_401, typeof __VLS_403> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_404 = __VLS_pickFunctionalComponentCtx(__VLS_401, __VLS_403)!;
let __VLS_405!: __VLS_NormalizeEmits<typeof __VLS_404.emit>;
(__VLS_404.slots!).default;
}
(__VLS_389.slots!).default;
}
{
const __VLS_406 = __VLS_intrinsicElements["tr"];
const __VLS_407 = __VLS_elementAsFunctionalComponent(__VLS_406);
const __VLS_408 = __VLS_407({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_407));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_406, typeof __VLS_408> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_409 = __VLS_pickFunctionalComponentCtx(__VLS_406, __VLS_408)!;
let __VLS_410!: __VLS_NormalizeEmits<typeof __VLS_409.emit>;
{
const __VLS_411 = __VLS_intrinsicElements["th"];
const __VLS_412 = __VLS_elementAsFunctionalComponent(__VLS_411);
const __VLS_413 = __VLS_412({ ...{}, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_412));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_411, typeof __VLS_413> & Record<string, unknown>) => void)({ ...{}, scope: ("row"), });
const __VLS_414 = __VLS_pickFunctionalComponentCtx(__VLS_411, __VLS_413)!;
let __VLS_415!: __VLS_NormalizeEmits<typeof __VLS_414.emit>;
(__VLS_414.slots!).default;
}
{
const __VLS_416 = __VLS_intrinsicElements["td"];
const __VLS_417 = __VLS_elementAsFunctionalComponent(__VLS_416);
const __VLS_418 = __VLS_417({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_417));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_416, typeof __VLS_418> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_419 = __VLS_pickFunctionalComponentCtx(__VLS_416, __VLS_418)!;
let __VLS_420!: __VLS_NormalizeEmits<typeof __VLS_419.emit>;
(__VLS_419.slots!).default;
}
{
const __VLS_421 = __VLS_intrinsicElements["td"];
const __VLS_422 = __VLS_elementAsFunctionalComponent(__VLS_421);
const __VLS_423 = __VLS_422({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_422));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_421, typeof __VLS_423> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_424 = __VLS_pickFunctionalComponentCtx(__VLS_421, __VLS_423)!;
let __VLS_425!: __VLS_NormalizeEmits<typeof __VLS_424.emit>;
("<");
(__VLS_424.slots!).default;
}
(__VLS_409.slots!).default;
}
(__VLS_324.slots!).default;
}
(__VLS_294.slots!).default;
}
(__VLS_279.slots!).default;
}
(__VLS_269.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
problems: problems as typeof problems,
options: options as typeof options,
getRecommendation: getRecommendation as typeof getRecommendation,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
};
