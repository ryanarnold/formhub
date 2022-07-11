import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../common/firebase-utils';

export interface IFields {
  address: boolean;
  contact: boolean;
  name: boolean;
}

export class Form {
  static COLLECTION_NAME = 'forms'; // update

  static COLLECTION = collection(db, this.COLLECTION_NAME);

  name: string;

  category: string;

  fieldGroup: IFields;

  ref?: DocumentReference | null;

  constructor(name: string, category: string, fieldGroup: IFields, ref?: DocumentReference) {
    this.name = name;
    this.category = category;
    this.fieldGroup = fieldGroup;
    this.ref = ref ?? null;
  }

  static fromDocument(document: DocumentSnapshot): Form {
    const data = document.data();
    return new Form(data?.name, data?.category, data?.field_group, document.ref);
  }

  static toDocument(form: Form) {
    // This is how the document will look like in firestore
    return {
      category: form.category,
      field_group: form.fieldGroup,
      name: form.name,
    };
  }

  public static async findAll(): Promise<Array<Form>> {
    const querySnapshot = await getDocs(this.COLLECTION);

    return querySnapshot.docs.map((data) => this.fromDocument(data));
  }

  public static async findByRef(ref: string): Promise<Form> {
    const docSnap = await getDoc(doc(db, this.COLLECTION_NAME, ref));

    if (docSnap.exists()) {
      return this.fromDocument(docSnap);
    }
    throw Error(`Document with ref ${ref} not found.`);
  }
}

export default {};
