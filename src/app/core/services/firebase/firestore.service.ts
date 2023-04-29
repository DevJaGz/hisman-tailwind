import { Injectable } from '@angular/core';
import {
	DocumentData,
	DocumentSnapshot,
	Firestore,
	Query,
	addDoc,
	collection,
	collectionData,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where,
} from '@angular/fire/firestore';
import { ID } from '@core/constants/users.constant';
import { Observable, from, map, switchMap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FirestoreService {
	constructor(private firestore: Firestore) {}

	/**
	 * Update a document, if the document does not exists, is created
	 * @param collectionName - Name of the collection
	 * @param documentData - Data for the focument to be updated/created
	 * @param queryProp - Query property inside the documentData to make the match in the query
	 * @returns Document data as observable (Emit only once)
	 */
	upsertDocument(
		collectionName: string,
		documentData: DocumentData,
		matchQuery?: Query<DocumentData>
	): Observable<DocumentData> {
		// Reference of the collection in the Firestore
		const collectionRef = collection(this.firestore, collectionName);
		// Query to find the document
		const documentQuery = matchQuery ? matchQuery : query(collectionRef, where(ID, '==', documentData[ID]));
		// Get the documents that match the query
		return from(getDocs(documentQuery)).pipe(
			switchMap(querySnapshot => {
				// Array to save the references of the found document
				const documentRefsFound: Promise<DocumentSnapshot<DocumentData>>[] = [];

				// Loop the documents found
				querySnapshot.forEach(document => {
					// Get the reference of the document found
					const documentRef = doc(this.firestore, `${collectionName}/${document.id}`);
					// Update the Firestore document with the fields provided in documentData.
					// If the document does not exist, is created - In this case always exists
					setDoc(documentRef, documentData, { merge: true });
					// Add the document to the array
					documentRefsFound.push(getDoc(documentRef));
				});

				// Get the first document from the array - Always should only be one
				const documentFound = documentRefsFound[0];

				// If the document is found then return the data
				if (documentFound) {
					return from(documentRefsFound[0]).pipe(map(documentRef => documentRef.data()));
				}

				// If the document is not found, then create/add the document in Firestore and return the data in it
				return from(addDoc(collectionRef, documentData)).pipe(switchMap(() => collectionData(documentQuery)));
			})
		);
	}
}
