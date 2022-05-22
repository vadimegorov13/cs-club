export type CreateBlogData = {
  name: string;
  content: string;
};

export type BlogData = {
  id: string;
  name: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type CreateProjectData = {
  name: string;
  content: string;
  createdAt: number;
};

export type useProjects = {
  createProject: (project: CreateProjectData) => Promise<any>;
};
