import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const Alert = ({ isOpen, saveChanges, dontSaveChanges}) => {
    return <Dialog open={isOpen}>
        <DialogTitle>
            Сохранить изменения?
        </DialogTitle>
        <DialogActions>
            <Button onClick={dontSaveChanges} color="primary">
                Не сохранять
            </Button>
            <Button onClick={saveChanges} color="primary">
                Сохранить
            </Button>
        </DialogActions>
    </Dialog>
}

export default Alert
