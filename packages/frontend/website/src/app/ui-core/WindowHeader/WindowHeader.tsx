import { Container, Button, SidebarSection, PageSection, DotsButtons } from './styledComponents';
const { BrowserWindow } = window.require('electron').remote;

interface IProps {
    title?: string;
}
export const WindowHeader = (props: IProps) => {
    const { title = '' } = props;
    const minimize = () => {
        BrowserWindow.getFocusedWindow()?.minimize();
    };
    const maximize = () => {
        BrowserWindow.getFocusedWindow()?.maximize();
    };
    const close = () => {
        BrowserWindow.getFocusedWindow()?.close();
    };
    return (
        <Container className="window-header">
            <SidebarSection>
                <DotsButtons className="title-bar-btns">
                    <Button className="close-btn" onClick={close}>
                        <div>x</div>
                    </Button>
                    <Button className="min-btn" onClick={minimize}>
                        <div>-</div>
                    </Button>
                    <Button className="max-btn" onClick={maximize}>
                        <div>+</div>
                    </Button>
                </DotsButtons>
            </SidebarSection>
            <PageSection>
                <div className="title">{title}</div>
            </PageSection>
        </Container>
    );
};
