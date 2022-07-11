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

export class UserData {
  static COLLECTION_NAME = 'user_data'; // update

  static COLLECTION = collection(db, this.COLLECTION_NAME);

  ref?: DocumentReference | null;

  firstName: string;

  middleName: string;

  lastName: string;

  suffix: string;

  mobileNumber: string;

  telephoneNumber: string;

  emailAddress: string;

  addressRoom: string;

  addressHouse: string;

  addressStreet: string;

  addressSubdivision: string;

  addressBarangay: string;

  addressCity: string;

  addressProvince: string;

  addressZipCode: string;

  constructor(ref?: DocumentReference) {
    this.ref = ref ?? null;

    this.firstName = '';

    this.middleName = '';

    this.lastName = '';

    this.suffix = '';

    this.mobileNumber = '';

    this.telephoneNumber = '';

    this.emailAddress = '';

    this.addressRoom = '';

    this.addressHouse = '';

    this.addressStreet = '';

    this.addressSubdivision = '';

    this.addressBarangay = '';

    this.addressCity = '';

    this.addressProvince = '';

    this.addressZipCode = '';
  }

  static fromDocument(document: DocumentSnapshot): UserData {
    const data = document.data();
    return new UserData(document.ref);
  }

  static toDocument(userData: UserData) {
    // This is how the document will look like in firestore
    return {
      address_barangay: userData.addressBarangay,
      address_city: userData.addressCity,
      address_house: userData.addressHouse,
      address_province: userData.addressProvince,
      address_room: userData.addressRoom,
      address_street: userData.addressStreet,
      address_subdivision: userData.addressSubdivision,
      address_zip: userData.addressZipCode,
      contact_email: userData.emailAddress,
      contact_mobile_number: userData.mobileNumber,
      contact_telephone_number: userData.telephoneNumber,
      name_first: userData.firstName,
      name_middle: userData.middleName,
      name_last: userData.lastName,
      name_suffix: userData.suffix,
    };
  }

  async create() {
    const docRef = await addDoc(UserData.COLLECTION, UserData.toDocument(this));
    this.ref = docRef;
  }

  async update() {
    const docSnap = await getDoc(this.ref as DocumentReference);

    if (docSnap.exists()) {
      await updateDoc(this.ref as DocumentReference, UserData.toDocument(this));
    }
  }

  async delete() {
    const docSnap = await getDoc(this.ref as DocumentReference);

    if (docSnap.exists()) {
      await deleteDoc(this.ref as DocumentReference);
    }
  }

  public static async findByRef(id: string): Promise<Form> {
    const docSnap = await getDoc(doc(db, this.COLLECTION_NAME, id));

    if (docSnap.exists()) {
      return this.fromDocument(docSnap);
    }
    throw Error(`Document with Id ${id} not found.`);
  }
}

export default {};
