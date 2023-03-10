import { ContextMenu as CtxMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

function ContextMenu({children, id}) {

          function handleClick(e, data) {
                    console.log(data.foo);
          }

          return (
                    <div>
                              {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
                              {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

                              <ContextMenuTrigger id={id} mouseButton={0}>
                                        <div className="well">{children}</div>
                              </ContextMenuTrigger>

                              <CtxMenu id={id}>
                                        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
                                                  ContextMenu Item 1
                                        </MenuItem>
                                        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
                                                  ContextMenu Item 2
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
                                                  ContextMenu Item 3
                                        </MenuItem>
                              </CtxMenu>

                    </div>
          );
}

export default ContextMenu;
