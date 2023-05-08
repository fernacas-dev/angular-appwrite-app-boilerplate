import { Port } from "./ports.model";

export interface InstanceData {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $updatedAt: string;
  ContainerId: string;
  Created: number;
  Image: string;
  ImageId: string;
  Labels: string;
  Mounts: string;
  Name: string;
  NetworkSettings: string;
  Ports: Port[];
  State: string;
  Status: string;
}
