import { ParseQuery } from "./queryParser";
import axios from "axios";
import { Project } from "../../models";



export async function ListProject(q: { Page: number; PageSize: number; Tags?: string[]; Uid?: string }) {
    return (await axios.get<Project[]>('/api/project' + ParseQuery(q))).data
}

export async function UpsertProject(p: Project) {
    return (await axios.post<{invite:boolean;project:Project}>('/api/project', p)).data
}
export async function GetProject(id: string) {
    if (id==="000000000000000000000000") {
        return null
    }
    return (await axios.get<Project>('/api/project/' + id)).data
}
export async function DeleteProject(id: string) {
    return (await axios.delete('/api/project/' + id)).data
}

export async function JoinProject(query:{token:string}) {
    return (await axios.post<Project>('/api/project/join' + ParseQuery(query))).data
}

