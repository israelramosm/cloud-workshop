import { CloudantV1 } from "@ibm-cloud/cloudant";
import { IamAuthenticator } from "ibm-cloud-sdk-core"

const authentication = new IamAuthenticator({
  apikey: process.env.CLOUDANT_APIKEY,
});

const service = CloudantV1.newInstance({ authentication });

service.setServiceUrl(process.env.CLOUDANT_URL);

const db = process.env.db_name;

export const getDocs = async (req, res) => {
  const { result } = await service.postAllDocs({
    db,
    includeDocs: true,
  });
  res.json({ status: "ok", result });
};

export const postDoc = async (req, res) => {
  const { result } = await service.postDocument({
    db,
    document: req.body
  });
  res.json({ status: "ok", result });
};

export const getDoc = async (req, res) => {
  const { result } = await service.getDocument({
    db,
    docId: req.params.id,
  });
  res.json({ status: "ok", result });
};

export const patchDoc = async (req, res) => {
  const document = await service.getDocument({
    db,
    docId: req.params.id,
  });

  const newDocument = {
    ...document.result,
    ...req.body,
  };

  const { result } = await service.postDocument({
    db,
    document: newDocument
  });

  res.json({
    status: "ok",
    result,
  });
};

export const deleteDoc = async (req, res) => {
  const document = await service.getDocument({
    db,
    docId: req.params.id,
  });

  const { result } = await service.deleteDocument({
    db,
    docId: document.result._id,
    rev: document.result._rev
  });

  res.json({
    status: "ok",
    result,
  });
};
