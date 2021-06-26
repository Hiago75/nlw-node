export class ITag {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  name_custom: () => string;
}
