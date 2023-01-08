import {
    SpreadsheetComponent, ColumnDirective, ColumnsDirective,
    RangeDirective, RangesDirective, SheetDirective, SheetsDirective
} from '@syncfusion/ej2-react-spreadsheet';

// mock data
import { OrderDetails } from "./data";

import classes from './style.module.scss';
import './spread-sheet.css';

export const SpreadSheetElement = () => {
    let SSObj: SpreadsheetComponent;
    const onCreated = () => {
        fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx")
            .then((response) => {
                response.blob().then((fileBlob) => {
                    var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    SSObj.open({file: file}); // open the file into Spreadsheet
                });
            });
    }
    const ButtonClick = () => {
        SSObj.save({
            url: "https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save",
            fileName: "SampleData",
            saveType: "Pdf"
        });
    }
    const onBeforeSave = (args: any) => {
        args.customParams = {customParams: "fileformat:CSV"}
    }
    
    return (
        <div className={classes.spreadsheet} >
            <div>
                Spread Sheet
            </div>
            <button className='e-btn custom' onClick={ButtonClick}>Save</button>
            <SpreadsheetComponent ref={((s:SpreadsheetComponent)=>SSObj=s)}
                                  allowOpen={true}
                                  openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                                  created={onCreated}
                                  allowSave={true}
                                  saveUrl="https://localhost:7295/api/sample/save"
                                  beforeSave={onBeforeSave}
            >
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={OrderDetails}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={110}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    )
}
