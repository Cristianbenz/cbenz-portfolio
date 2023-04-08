export interface Project {
    title: string;
    cover: string
    images: Array<string>;
    description: string;
    backTechnologies?: Array<string>;
    frontTechnologies?: Array<string>;
    dbTechnologies?: Array<string>;
    repository: string;
    deploy: string;
}