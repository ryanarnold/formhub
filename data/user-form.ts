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
import { Form } from './form';
import { db } from '../common/firebase-utils';

export class UserForm {
  static COLLECTION_NAME = 'user_forms'; // update

  static COLLECTION = collection(db, this.COLLECTION_NAME);

  userId: string;

  formRef: DocumentReference;

  link: string;

  ref?: DocumentReference | null;

  constructor(userId: string, formRef: DocumentReference, link?: string, ref?: DocumentReference) {
    this.userId = userId;
    this.formRef = formRef;
    this.link = link ?? '';
    this.ref = ref ?? null;
  }

  static fromDocument(document: DocumentSnapshot): UserForm {
    const data = document.data();
    return new UserForm(data?.user_id, data?.form_ref, data?.link, document.ref);
  }

  static toDocument(userForm: UserForm) {
    return {
      user_id: userForm.userId,
      form_ref: userForm.formRef,
      link: userForm.link,
    };
  }

  async create() {
    const docRef = await addDoc(UserForm.COLLECTION, UserForm.toDocument(this));
    this.ref = docRef;
  }

  async update() {
    const docSnap = await getDoc(this.ref as DocumentReference);

    if (docSnap.exists()) {
      await updateDoc(this.ref as DocumentReference, UserForm.toDocument(this));
    }
  }

  async delete() {
    const docSnap = await getDoc(this.ref as DocumentReference);

    if (docSnap.exists()) {
      await deleteDoc(this.ref as DocumentReference);
    }
  }
}

export default {};
