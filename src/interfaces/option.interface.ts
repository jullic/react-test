export interface IDependencesOption {
	option: string;
	value: string;
}

export interface IOption {
	option: string;
	value: string;
	dependencies: IDependencesOption[];
}