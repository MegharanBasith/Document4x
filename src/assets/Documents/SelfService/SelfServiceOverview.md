## **<center>Self-Service</center>** 

## **<center>About Self-Service</center>**

 - [`Click Here`](https://portal.mawarid.com.sa/System/#/SelfService/authgateway) - SelfService Application Page
 - Selfservice app mainly works with *Leave request*, *Loan request*, *Business trip*, *Purchase Request*, and *Item request*

## **<ins><center>Leave Request</center></ins>**
   - A leave request is a message sent to an employer or supervisor to request time off work. It includes the reason for the leave and the specified dates.
   ## **<ins>Workflow Stages</ins>**
   - Show pending
   - Draft
   - Submitted
   - Approved
   - Reject
   - cancel
   ## **<ins>API Details</ins>**
   - api/v1/entitytype/wfstageaction (Handles data movement between workflow stages.)
   - getEmployeeDetailsByEmployeeIdOrName (Fetches employee details).
   - api/v1/security/documenttype/showattachement (Handles attachments).
   - api/v1/categoryrequestertype (Retrieves category or request type details.).
   - api/v1/recruitment/CreateSelfServiceRequestERP (Creates data on ERP with the help of event).
   - > Note: This api is used to approve data on ERP 
   - EndPoint: https://almawarid.operations.dynamics.com/api/services/MWMawaridServiceGroup/MWMawaridService/submitLeaveRequestToWF, *Body: { "_leaveRequestId": "@@Data.ERPRequestId", "_submitterUserId": "admin",
                                    "_status": "Approved", "_legalEntity": "MWD" }*
   - > Note: The _submitterUserId is always assigned as admin during submission.                                  
   - Fields marked with an asterisk (*) are required when creating a leave request.
   ## **<ins>Key Options</ins>** 
   - *Data Format*: Adjusts based on the current stage.
   - *Export Option*: Allows exporting multiple records.
   - *Import Process*: Supports bulk data import.


## **<ins><center>Loan Request</center></ins>**
   - A Loan Request is initiated by the Employee and executed by a Approval Manager of the Employee.
   ## **<ins>Workflow Stages</ins>**
   - Show pending
   - Draft
   - Submitted
   - Approved
   - Reject
   - cancel
   ## **<ins>API Details</ins>**
   - api/v1/entitytype/wfstageaction (Handles data movement between workflow stages.)
   - getEmployeeDetailsByEmployeeIdOrName (Fetches employee details).
   - api/v1/security/documenttype/showattachement (Handles attachments).
   - api/v1/categoryrequestertype (Retrieves category or request type details.).
   - api/v1/recruitment/CreateSelfServiceRequestERP (Creates data on ERP with the help of event).
   - > Note: This api is used to approve data on ERP 
   - EndPoint: https://almawarid.operations.dynamics.com/api/services/MWMawaridServiceGroup/MWMawaridService/submitLeaveRequestToWF, *Body: { "_loanRequestId": "@@Data.ERPRequestId", "_submitterUserId": "admin",
                                    "_status": "Approved", "_legalEntity": "MWD" }*
   - > Note: The _submitterUserId is always assigned as admin during submission.                                  
   - Fields marked with an asterisk (*) are required when creating a leave request.
   ## **<ins>Key Options</ins>** 
   - *Data Format*: Adjusts based on the current stage.
   - *Export Option*: Allows exporting multiple records.
   - *Import Process*: Supports bulk data import.


## **<ins><center>Business Trip</center></ins>**
   - A business trip is a work-related visit that often involves traveling a considerable distance. It provides a break from the regular office routine.
   ## **<ins>Workflow Stages</ins>**
   - Show pending
   - Draft
   - Submitted
   - Approved
   - Reject
   - cancel
   ## **<ins>API Details</ins>**
   - api/v1/entitytype/wfstageaction (Handles data movement between workflow stages.)
   - getEmployeeDetailsByEmployeeIdOrName (Fetches employee details).
   - api/v1/security/documenttype/showattachement (Handles attachments).
   - api/v1/categoryrequestertype (Retrieves category or request type details.).
   - api/v1/recruitment/CreateSelfServiceRequestERP (Creates data on ERP with the help of event).
   - > Note: This api is used to approve data on ERP 
   - EndPoint: https://almawarid.operations.dynamics.com/api/services/MWMawaridServiceGroup/MWMawaridService/submitLeaveRequestToWF, *Body: { "_BusinessTripRequestId": "@@Data.ERPRequestId", "_submitterUserId": "admin",
                                    "_status": "Approved", "_legalEntity": "MWD" }*
   - > Note: The _submitterUserId is always assigned as admin during submission.                                  
   - Fields marked with an asterisk (*) are required when creating a leave request.
   ## **<ins>Key Options</ins>** 
   - *Data Format*: Adjusts based on the current stage.
   - *Export Option*: Allows exporting multiple records.
   - *Import Process*: Supports bulk data import.


## **<ins><center>Purchase Request</center></ins>**
  ## **<ins>Workflow Stages</ins>**
   - Show pending
   - Draft
   - Submitted
   - Approved
   - Reject
   - cancel
  ## **<ins>API Details</ins>**
   - api/v1/erp/ExecutDeleteDraftPurchaseRequest (This Api handles the delete for purchase request)
   - api/v1/erp/ExecutGetWorkflowApprovalsListPurchaseRequest (Fetches the requests waiting for approval).
   - > Note: This api is used to create data on ERP 
   - https://almawarid.operations.dynamics.com/api/services/MWRecIntegration/MWRecPortalIntegrationService/ExecutSubmitPurchaseRequestToWFRequest (Api for submitting request to ERP) , .
   - api/v1/erp/CreatePurchReuestHeader (Create the header for purchase request).
   - api/v1/recruitment/CreateSelfServiceRequestERP (Creates data on ERP with the help of event).
   - Fields marked with an asterisk (*) are required when creating a leave request.
   - Purchase request hase lines inside the details form, we use this api api/v1/erp/ExecutGetProductListRequest to get the list of products
  ## **<ins>Key Options</ins>** 
   - *Data Format*: Adjusts based on the current stage.
   - *Export Option*: Allows exporting multiple records.
   - *Import Process*: Supports bulk data import.

## **<ins><center>Item Request</center></ins>**
  ## **<ins>Workflow Stages</ins>**
   - Show pending
   - Draft
   - Submitted
   - Approved
   - Reject
   - cancel
  ## **<ins>API Details</ins>**
   - api/v1/recruitment/ValidateItemRequest (Use to validate ERP request)
   - > Note: This api is used to create item request data on ERP 
   - https://almawarid.operations.dynamics.com/api/services/MWRecIntegration/MWRecPortalIntegrationService/ExecutSubmitItemRequestToWFRequest, *Body : "{\"_Request\": {\"ItemRequestId\": \"@@Data.ERPRequestId\",\"SubmitterUserId\": \"Admin\",\"Company\": \"MWD\"}\r\n}\r\n"*
   - This is our BCP API api/v1/erp/CreateItemRequest integrated with ERP api, *Body : { 
  "Company": "MWD",
  "Description": "@@Data.Description",
  "TransDate": "@@Data.TransDate",
  "Reference": "@@Data.Reference",  "PersonnelNumber":"@@Data.PersonnelNumber",
  "ItemConsumptions": @@Data.ItemConsumptions
}*
   - Item request hase lines inside the details form, we use this api api/v1/erp/ExecutGetProductListRequest to get the list of items
  ## **<ins>Key Options</ins>** 
   - *Data Format*: Adjusts based on the current stage.
   - *Export Option*: Allows exporting multiple records.
   - *Import Process*: Supports bulk data import.

## **<ins>Leave Request Create</ins>**
- On Leave request create on loading for we set an value for employee id (User who logged in currentuser)*LocalUserInfo.EmployeeId*
- on default today date patch we use *TodayDatePipe 'DATE'*
- On rules we update the default values for the following fields *Ticket for*, *Ticket cost on*, *destination type*,*ticket class*, *depature from*, *Visa for*, *VisaCost on* fields
- While changing employee id we call api of *api/v1/erp/getReportingManagerForEmployee* with URL parameter of *_employeeid*, *_Company* and *user-id*
- While changing VacationType we triggers the field VacationCode
- On Startdate change we user the handle bar for start date as *DatePipe StartDate 'DATE'* and again we triggers the Vacation code, It automatically set the end date with use of *AddtionalDatePipe StartDate VacationDays *
- On end date change we set an enddate by handle bar *DatePipe EndDate 'DATE'* as simailar to start date
- On adition of enddate we set an value of ExpectedReturnDate by the help of the handle bar *AddtionalDatePipe EndDate '1' * and again we triggers the vacationcode 
- On VacationDays Change it triggers the start date ang it will change readonly to changeable field
- on AdultTicketsUsed, InfantTicketsUsed, VisaUsed, VisaEntitlement it triggers the vacationcode changes
- On AlternativeEmployeeId Change it triggers AlternativeEmployeeName and patches default employee id with the help of *data.employeeName*
- On vactioncode change it triggers the *api/v1/erp/InitiateLeaveRequest* Api with params of user-id(Note: If you need this api for testion and devolepment purpose download api collection in above mentioned link and import it in postman)
- On vacationDaysExtTwo Change for te field endDateExtend two we use *CurrentAdditionalDatePipe startDateExtTwo vacationDaysExtTwo* handlebar and for endDateExtTwoString we use *DatePipe endDateExtTwo 'DATE'*
- On vacationDaysExtOne Change for the field endDateExtOne we use *CurrentAdditionalDatePipe startDateExtOne vacationDaysExtOne* and endDateExtOneString *DatePipe endDateExtOne 'DATE'* handlebars
- on vacationTypeExTwo change we set an value for startDateExtTwo, startDateExtTwoString as handlebar *AddtionalDatePipe endDateExtOne '1'* and *DatePipe startDateExtTwo 'DATE'*


## **<ins>Loan Request Create</ins>**

- On Loan request create we set an employeeid as *LocalUserInfo.EmployeeId*
- While changing employee id we call api of *api/v1/erp/getReportingManagerForEmployee* with URL parameter of *_employeeid*, *_Company* and *user-id*
- On LoanProfileId Change we set an value for loantype, oyher loan type, loan Profile recid, effective date as from pipes *data.loanType*, *data.otherLoanTypeId*, *data.recId*
- On EffectiveDate Change we set an value for EffectiveDateString as *DateToStringPipe EffectiveDate 'mm-dd-yyyy'* 
- On EffectiveDate Change we all an restapi *api/v1/erp/InitiateLoanRequest*

## **<ins>Business Trip Create</ins>**

- On Business trip create we set an employeeid as *LocalUserInfo.EmployeeId*
- On loading bussiness trip create we load api *api/v1/erp/InitiateBusinessRequest* while loading business trip create form 
-  While changing employee id we call api of *api/v1/erp/getReportingManagerForEmployee* with URL parameter of *_employeeid*, *_Company* and *user-id*

## **<ins>Purchase Request Create</ins>**
- After creating it will redirect to details, on details create the item request lines
- This request has validation, that if you dont have lines for the request we will not able to proceed further actions
- In the approved stage with the help of event we call the CreateSelfServiceERP Api to create the request in ERP 
- On purchase request we have delete option that we able to delete the request on ERP from self-service System

## **<ins>Item Request Create</ins>**

- On create we just need to give the *Description* the remaining EmployeeId, Employee Name, TransDate, Personal Number
  fields automatically pacth with the help of rules
   - After creating it will redirect to details, on details create the item request lines
   - This request has validation, that if you dont have lines for the request we will not able to proceed further actions
   - In the approved stage with the help of event we call the CreateSelfServiceERP Api to create the request in ERP 




